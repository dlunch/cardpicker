use async_diesel::AsyncRunQueryDsl;
use async_trait::async_trait;
use diesel::{
    insert_into,
    r2d2::{ConnectionManager, Pool},
    ExpressionMethods, PgConnection, QueryDsl,
};
use prost::Message;
use redis::AsyncCommands;
use tonic::{Request, Response, Status};
use uuid::Uuid;

use crate::config::Config;
use crate::db::models;

use super::base;

mod pb {
    pub mod common {
        tonic::include_proto!("common");
    }
    pub mod card {
        tonic::include_proto!("card");
    }
}

mod internal {
    include!(concat!(env!("OUT_DIR"), "/proto.internal.rs"));
}

use pb::card::{CardItem, CardListResponse, RegisterRequest, StartScrapRequest};
use pb::common::CardCompany;

pub struct Card {
    db_pool: Pool<ConnectionManager<PgConnection>>,
    redis_pool: deadpool_redis::Pool,
}

impl Card {
    pub fn new(
        db_pool: Pool<ConnectionManager<PgConnection>>,
        redis_pool: deadpool_redis::Pool,
        config: Config,
    ) -> pb::card::card_server::CardServer<Self> {
        let token_secret = config.token_secret;

        pb::card::card_server::CardServer::with_interceptor(Self { db_pool, redis_pool }, move |req| base::check_auth(req, &token_secret))
    }
}

#[async_trait]
impl pb::card::card_server::Card for Card {
    async fn list(&self, request: Request<()>) -> Result<Response<CardListResponse>, Status> {
        use crate::db::schema::cards::dsl;

        let user_id = base::get_user_id(&request);

        let cards = dsl::cards
            .filter(dsl::user_id.eq(user_id))
            .load_async::<models::Card>(&self.db_pool)
            .await
            .unwrap();

        let items = cards
            .into_iter()
            .map(|x| CardItem {
                id: x.id.to_string(),
                r#type: x.r#type,
                display_name: x.display_name,
            })
            .collect::<Vec<_>>();

        let response = CardListResponse { items };

        Ok(Response::new(response))
    }

    async fn register(&self, request: Request<RegisterRequest>) -> Result<Response<()>, Status> {
        use crate::db::schema::user_credentials::dsl;

        let user_id = base::get_user_id(&request);
        let request = request.into_inner();

        let r#type = Self::card_company_str(CardCompany::from_i32(request.card_company).unwrap());

        insert_into(dsl::user_credentials)
            .values((
                dsl::id.eq(Uuid::new_v4()),
                dsl::user_id.eq(user_id),
                dsl::type_.eq(r#type),
                dsl::login_id.eq(request.login_id),
                dsl::login_password.eq(request.login_password),
            ))
            .execute_async(&self.db_pool)
            .await
            .unwrap();

        Ok(Response::new(()))
    }

    async fn start_scrap(&self, request: Request<StartScrapRequest>) -> Result<Response<()>, Status> {
        use crate::db::schema::user_credentials::dsl;

        let user_id = base::get_user_id(&request);
        let request = request.into_inner();

        let r#type = Self::card_company_str(CardCompany::from_i32(request.card_company).unwrap());

        let credential = dsl::user_credentials
            .filter(dsl::user_id.eq(user_id))
            .filter(dsl::type_.eq(r#type))
            .first_async::<models::UserCredential>(&self.db_pool)
            .await
            .unwrap();

        let scrap_req = internal::CardScrapRequest {
            user_id: user_id.to_string(),
            card_type: credential.r#type,
            login_id_encrypted: credential.login_id,
            login_password_encrypted: credential.login_password,
        };

        let mut buf = vec![0u8; scrap_req.encoded_len()];
        scrap_req.encode(&mut buf).unwrap();

        let mut conn = self.redis_pool.get().await.unwrap();
        let _: () = conn.publish("scrap", buf).await.unwrap();

        Ok(Response::new(()))
    }
}

impl Card {
    fn card_company_str(card_company: CardCompany) -> &'static str {
        match card_company {
            CardCompany::Kb => "Kb",
        }
    }
}

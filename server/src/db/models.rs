use std::time::SystemTime;

use uuid::Uuid;

#[derive(Queryable)]
pub struct User {
    pub id: Uuid,
    pub username: String,
    pub password: String,
    pub created_at: SystemTime,
    pub updated_at: SystemTime,
}

#[derive(Queryable)]
pub struct Card {
    pub id: Uuid,
    pub user_id: Uuid,
    pub r#type: String,
    pub display_name: String,
    pub login_id: String,
    pub login_password: String,
    pub created_at: SystemTime,
    pub updated_at: SystemTime,
}

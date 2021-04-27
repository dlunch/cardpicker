table! {
    cards (id) {
        id -> Uuid,
        user_id -> Uuid,
        #[sql_name = "type"]
        type_ -> Varchar,
        display_name -> Varchar,
        login_id -> Varchar,
        login_password -> Varchar,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    users (id) {
        id -> Uuid,
        username -> Varchar,
        password -> Varchar,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

joinable!(cards -> users (user_id));

allow_tables_to_appear_in_same_query!(cards, users,);

CREATE TABLE "cards" (
  id UUID PRIMARY KEY,
  user_id UUID NOT NULL,

  type VARCHAR NOT NULL,
  display_name VARCHAR NOT NULL,

  login_id VARCHAR NOT NULL,
  login_password VARCHAR NOT NULL,

  FOREIGN KEY(user_id) REFERENCES "users"(id)
)
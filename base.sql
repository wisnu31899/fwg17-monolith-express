-- Active: 1713325435843@@127.0.0.1@5432@postgres
CREATE TABLE "users"(
    "id" SERIAL PRIMARY KEY,
    "full_name" VARCHAR(80),
    "email" VARCHAR(80),
    "password" VARCHAR(100),
    "created_at" TIMESTAMP DEFAULT NOW(),
    "updated_at" TIMESTAMP
);

INSERT INTO "users" ("full_name","email","password")
VALUES ('admin','admin@mail.com','123'),
('guest','guest@mail.com','123');
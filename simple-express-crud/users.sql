
CREATE DATABASE api;

CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  name VARCHAR(30),
  email VARCHAR(30),
  status VARCHAR(30)
);


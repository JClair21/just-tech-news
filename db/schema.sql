DROP DATABASE IF EXISTS just_tech_news_db;

CREATE DATABASE just_tech_news_db;

CREATE TABLE parties (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    description TEXT
);
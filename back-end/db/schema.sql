DROP DATABASE IF EXISTS cta_dev;
CREATE DATABASE cta_dev;

\c cta_dev;

DROP TABLE IF EXISTS test;

CREATE TABLE test (
    id SERIAL PRIMARY KEY, 
    name TEXT REQUIRED,
    description TEXT,
    price DECIMAL(10,2),
    rating TINYINT check (rating>=0 and rating<=5),
    featured BOOLEAN,
    image TEXT
);

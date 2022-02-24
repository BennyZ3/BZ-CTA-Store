DROP TABLE IF EXISTS products, users, transactions;

CREATE TABLE products (
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL,
    description TEXT,
    price DECIMAL(10,2),
    rating SMALLINT,
    check (rating>=0 and rating<=5),
    featured BOOLEAN,
    image TEXT,
    inventory INT
);

CREATE TABLE users (
    username TEXT PRIMARY KEY,
    email TEXT,
    password TEXT,
    admin BOOLEAN
);

CREATE TABLE transactions (
    transact_id SERIAL PRIMARY KEY,
    user_id TEXT,
    product_id INT,
    date DATE,
    transaction_complete BOOLEAN,
    FOREIGN KEY (user_id) REFERENCES users(username),
    FOREIGN KEY (product_id) REFERENCES products(id)
);

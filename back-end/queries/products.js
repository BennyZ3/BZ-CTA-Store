const db = require("../db/dbConfig");

const getAllProducts = async () => {
  try {
    const allProducts = await db.any("SELECT * FROM products");
    return allProducts;
  } catch (error) {
    return error;
  }
};

const getProduct = async (id) => {
  try {
    const product = await db.one("SELECT * FROM products WHERE id=$1", id);
    return product;
  } catch (error) {
    return error;
  }
};

const getFeatured = async () => {
  try {
    const product = await db.any("SELECT * FROM products WHERE featured=true");
    return product;
  } catch (error) {
    return error;
  }
};

const newProduct = async (product) => {
  let { name, description, price, rating, featured, image, inventory } =
    product;
  if (!image) {
    image = "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image";
  }
  if (!description) {
    description = "No description";
  }
  if (!inventory) {
    inventory = 0;
  }
  try {
    const newProduct = await db.one(
      "INSERT INTO products (name, description, price, rating, featured, image, inventory) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *",
      [name, description, price, rating, featured, image, inventory]
    );
    return newProduct;
  } catch (error) {
    return error;
  }
};

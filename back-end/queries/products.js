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

// Admin Only Functions
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

const deleteProduct = async (id) => {
  try {
    const deletedProduct = db.one(
      "DELETE FROM products WHERE id=$1 RETURNING *",
      id
    );
    return deletedProduct;
  } catch (error) {
    return error;
  }
};

const updateProduct = async (id, product) => {
  try {
    let { name, description, price, rating, featured, image, inventory } =
      product;
    const updatedProduct = await db.one(
      "UPDATE products SET name=$1, description=$2, price=$3, rating=$4, featured=$5, image=$6, inventory=$7 WHERE id=$8 RETURNING *",
      [name, description, price, rating, featured, image, inventory, id]
    );
    return updatedProduct;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllProducts,
  getFeatured,
  getProduct,
  newProduct,
  deleteProduct,
  updateProduct,
};

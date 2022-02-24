const { response } = require("express");
const express = require("express");
const {
  getAllProducts,
  getFeatured,
  getProduct,
  newProduct,
  deleteProduct,
  updateProduct,
} = require("../queries/products");

const products = express.Router();

products.get("/", async (request, response) => {
  console.log("GET request all products");
  const items = await getAllProducts();
  response.status(200).json({ success: true, payload: items });
});

products.get("/featured", async (request, response) => {
  console.log("GET request featured products");
  const items = await getFeatured();
  response.status(200).json({ success: true, payload: items });
});

products.get("/:id", async (request, response) => {
  const { id } = request.params;
  console.log(`GET request product ${id}`);
  const item = await getProduct(id);
  if (item.id) {
    response.status(200).json({ success: true, payload: item });
  } else {
    response.status(404).json({ success: false, payload: "Not Found" });
  }
});

products.post("/", async (request, response) => {
  console.log(`POST request to products`);
  const item = await newProduct(request.body);
  if (item.id) {
    response.status(200).json({ success: true, payload: item });
  } else {
    response.status(400).json({ success: false, payload: item });
  }
});

products.delete("/:id", async (request, response) => {
  const { id } = request.params;
  console.log(`DELETE request product ${id}`);
  const item = await deleteProduct(id);
  if (item.id) {
    response.status(200).json({ success: true, payload: item });
  } else {
    response.status(400).json({ success: false, payload: item });
  }
});

products.put("/:id", async (request, response) => {
  const { id } = request.params;
  console.log(`PUT request product ${id}`);
  try {
    const updatedItem = await updateProduct(id, request.body);
    response.status(200).json({ success: true, payload: updatedItem });
  } catch (error) {
    response.status(404).json({ error: "Snack not found" });
  }
});

module.exports = products;

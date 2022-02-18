const express = require("express");

const products = express.Router();

products.get("/", async (request, response) => {
  const items = await getAllItems();
  response.status(200).json({ success: true, payload: items });
});

module.exports = products;

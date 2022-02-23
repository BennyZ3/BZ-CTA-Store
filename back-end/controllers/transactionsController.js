const { response } = require("express");
const express = require("express");
const {
  newTransaction,
  addToCart,
  removeFromCart,
} = require("../queries/transactions");

const transactions = express.Router();

transactions.post("/add", async (request, response) => {
  console.log("Post request to cart");
  const { username, product_id } = request.body;
  const newTrans = await addToCart(username, product_id);
  if (newTrans.transact_id) {
    response.status(200).json({ success: true, payload: newTrans });
  } else {
    response.status(400).json({ success: false, payload: newTrans });
  }
});

transactions.delete("/:id", async (request, response) => {
  const { id } = request.params;
  console.log(`remove cart item at id ${id}`);
  const transaction = await removeFromCart(id);
  if (transaction.transact_id) {
    response.status(200).json({ success: true, payload: transaction });
  } else {
    response.status(400).json({ success: false, payload: transaction });
  }
});

module.exports = transactions;

const db = require("../db/dbConfig");

const newTransaction = async (username, productID, quantity) => {
  try {
    const updateInventory = await db.one(
      "UPDATE products SET inventory=inventory-$1 WHERE id=$2 RETURNING *",
      [quantity, productID]
    );
    const today = new Date();
    const date = `${today.getFullYear}-${
      today.getMonth() + 1
    }-${today.getDate()}`;
    const createTransaction = await db.one(
      "INSERT INTO transactions (user_id, product_id, transaction_complete, date) VALUES ($1,$2,$3,$4) RETURNING *",
      [username, productID, true, date]
    );
    return { products: updateInventory, transaction: createTransaction };
  } catch (error) {
    return error;
  }
};

const addToCart = async (username, productID, quantity) => {
  try {
    const today = new Date();
    const date = `${today.getFullYear}-${
      today.getMonth() + 1
    }-${today.getDate()}`;
    const createTransaction = await db.one(
      "INSERT INTO transactions (user_id, product_id, transaction_complete, date) VALUES ($1,$2,$3,$4) RETURNING *",
      [username, productID, false, date]
    );
    return createTransaction;
  } catch (error) {
    return error;
  }
};

module.exports = {
  newTransaction,
  addToCart,
};

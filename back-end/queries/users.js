const db = require("../db/dbConfig");

const getUser = async (username) => {
  // Validate in controller
  try {
    const userInfo = await db.one(
      "SELECT * FROM users WHERE username=$1",
      username
    );
    return userInfo;
  } catch (error) {
    return error;
  }
};

const getAdmin = async (username) => {
  // Validate in controller
  try {
    const userInfo = await db.one(
      "SELECT admin FROM users WHERE username=$1",
      username
    );
    return userInfo;
  } catch (error) {
    return error;
  }
};

const getUserCart = async (username) => {
  console.log(username);
  try {
    // const cart = await db.any(
    //   "SELECT * FROM transactions INNER JOIN products ON (transactions.product_id = products.id) WHERE user_id ='$1' AND transaction_complete = false",
    //   username
    // );
    // individual id filter keeps giving an error for some reason
    const cart = await db.any(
      "SELECT * FROM transactions INNER JOIN products ON (transactions.product_id = products.id) WHERE transaction_complete = false"
    );
    return cart;
  } catch (error) {
    return error;
  }
};

const getOrderHistory = async (username) => {
  try {
    //maybe change from * to specific columns at some point
    const history = await db.any(
      "SELECT * FROM transactions INNER JOIN products ON (transactions.product_id = products.id) WHERE user_id = '$1' AND transaction_complete = true",
      username
    );
    return history;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getUser,
  getUserCart,
  getOrderHistory,
  getAdmin,
};

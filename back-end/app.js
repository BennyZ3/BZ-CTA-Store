// DEPENDENCIES
const cors = require("cors");
const { response } = require("express");
const express = require("express");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

const productsController = require("./controllers/productsController");
const usersController = require("./controllers/usersController");
const transactionsController = require("./controllers/transactionsController");
app.use("/products", productsController);
app.use("/users", usersController);
app.use("/transactions", transactionsController);

// EXPORT
module.exports = app;

const { response } = require("express");
const express = require("express");
const {
  getUser,
  getAdmin,
  getUserCart,
  registerUser,
} = require("../queries/users");

const users = express.Router();

users.post("/", async (request, response) => {
  console.log(`Login check for ${request.body.username}`);
  //login
  console.log(request.body.username);
  const userInfo = await getUser(request.body.username);
  //   console.log("userInfo", userInfo);
  if (request.body.password === userInfo.password) {
    console.log("accepted");
    response
      .status(200)
      .json({ success: true, payload: { admin: userInfo.admin } });
  } else {
    console.log("rejected");
    response
      .status(400)
      .json({ success: false, payload: "Username or password incorrect" });
  }
});

users.post("/admin", async (request, response) => {
  //check admin
  console.log(`admin check for ${request.body.username}`);
  const userAdmin = await getAdmin(request.body.username);
  console.log(userAdmin);
  response.status(200).json({ success: true, payload: userAdmin });
});

users.post("/cart", async (request, response) => {
  console.log(`cart info for user ${request.body.username}`);
  const cart = await getUserCart(request.body.username);
  //   console.log("cartinfo", cart);
  response.status(200).json({
    success: true,
    payload: cart.filter((item) => item.user_id === request.body.username),
  });
});

users.post("/new", async (request, response) => {
  console.log(request.body);
  const usernameCheck = await getUser(request.body.username);
  console.log(usernameCheck.received);
  if (!usernameCheck.received) {
    const newUser = await registerUser(request.body);
    console.log(newUser);
    if (newUser.username) {
      response.status(200).json({ success: true, payload: newUser });
    } else {
      response
        .status(400)
        .json({ success: false, payload: "username not available" });
    }
  } else {
    response.status(400)({ success: false, payload: "username not available" });
  }
});

module.exports = users;

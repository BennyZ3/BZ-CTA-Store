const { response } = require("express");
const express = require("express");
const { getUser, getAdmin } = require("../queries/users");

const users = express.Router();

users.get("/", async (request, response) => {
  console.log(`Login check for ${request.body.username}`);
  //login
  const userInfo = await getUser(request.body.username);
  //   console.log(userInfo.password);
  if (request.body.password === userInfo.password) {
    response
      .status(200)
      .json({ success: true, payload: { admin: userInfo.admin } });
  } else {
    response
      .status(400)
      .json({ success: false, payload: "Username or password incorrect" });
  }
});

users.get("/admin", async (request, response) => {
  //check admin
  const userAdmin = getAdmin(request.body.username);
  console.log(userAdmin);
  response.status(200).json({ success: true, payload: userAdmin });
});
module.exports = users;

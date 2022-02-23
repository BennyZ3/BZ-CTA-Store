const { response } = require("express");
const express = require("express");
const { getUser, getAdmin } = require("../queries/users");

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
module.exports = users;

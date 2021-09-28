"use strict";

const express = require("express");
const server = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
server.use(cors());

const PORT = process.env.PORT;
const MONGO_SERVER_LINK = process.env.MONGO_SERVER_LINK;

mongoose.connect(`${MONGO_SERVER_LINK}`);

const { getBookHandler } = require("./models/bookController");

server.get("/", homeRouteHandler);
server.get("/getBook", getBookHandler);
server.get("*", notFoundHandler);

function homeRouteHandler(req, res) {
  res.send("home route");
}

function notFoundHandler(req, res) {
  res.status(404).send("NOT FOUND!!");
}

server.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});

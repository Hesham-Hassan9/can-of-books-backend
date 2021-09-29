"use strict";
const express = require("express");
const server = express(); 
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
server.use(cors());
server.use(express.json());

const PORT = process.env.PORT;
const MONGO_SERVER_LINK = process.env.MONGO_SERVER_LINK

mongoose.connect(`${MONGO_SERVER_LINK}`);

const { bookHandler, createHandler, deleteHandler, updateHandler} = require("./models/bookController");

// Routes
server.get('/', homeRouteHandler);
server.get('/Book', bookHandler);
server.post('/create-book', createHandler);
server.delete('/delete-book/:bookID', deleteHandler);
server.put('/update-book', updateHandler);
server.get('*', notFoundHandler);

// Function Handlers
function homeRouteHandler(req, res) {
    res.send('home route');
  }
  
  function notFoundHandler(req, res) {
    res.status(404).send('NOT FOUND!!');
  }
  
  server.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
  });



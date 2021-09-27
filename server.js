"use strict";

const express = require("express");
const app = express(); 
const cors = require("cors"); 
const mongoose = require("mongoose"); 
require("dotenv").config();
app.use(cors());
app.use(express.json()); 

const PORT = process.env.PORT;
const MONGO_SERVER = process.env.MONGO_SERVER_LINK

mongoose.connect(`${MONGO_SERVER}`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

const { seedBook } = require('./models/books');
const { getBookController} = require("./controllers/bookController");

app.get('/', function (req, res) {
    res.send('hello world')
})

//this get method to initialize the data by seedBook function. it is called for once

// app.get('/books', (req, res) => {

//     res.json(seedBook());

// })

app.get('/books', getBookController);

app.listen(PORT, (res) => {
    console.log(`server is running at port ${PORT}`);
})

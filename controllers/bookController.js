'use strict';
const { bookModel } = require("../models/books");

let getBookController = (req, res) => {
    bookModel.find().then(data => { 
        res.json(data);
    }).catch( (error)=> {
        res.statu(500).send('error there is no data to get it');
    });
}


module.exports = {
    getBookController,
}
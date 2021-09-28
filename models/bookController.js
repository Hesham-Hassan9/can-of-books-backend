'use strict';

const {   books } = require("./books.js");

let bookHandler = (req, res) => {
    let email1 = req.query.email;
      books.find({email:email1}).then(data => {
        res.json(data); 
    })
    .catch((error) => {
        res.statu(500).send('error there is no data to get');
    });
}

let createHandler = async  (req, res) => {
    let { title1, author1, description1, status1, email1} = req.body;
    await   books.create({
      title: title1,
      author: author1,
      description: description1,
      status: status1,
      email: email1
    })
      books.find({email:email1}).then(data => {
        res.status(200).json(data);
    }).catch((error) => {
        res.status(500).send('error there is no recived data');
    });
}

let deleteHandler = (req, res) => {

    let id = req.query.id;
    console.log(id);
    let email1 = req.query.email;
    console.log(email1);
      books.findByIdAndDelete({_id:id}).then(() => {
          books.find({email:email1}).then(data => {
            res.status(200).json(data);
        })
    }).catch((error) => {
        res.status(500).send('error there is no file');
    });
}

module.exports = {
    bookHandler,
    createHandler,
    deleteHandler,
}
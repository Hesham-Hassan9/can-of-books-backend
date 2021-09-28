"use strict";

const { books } = require("./books");

let getBookHandler = (req, res) => {
  let email = req.query.email;
  books
    .find({ email: email })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.statu(500).send("error there is no data to get");
    });
};

module.exports = {
  getBookHandler,
};

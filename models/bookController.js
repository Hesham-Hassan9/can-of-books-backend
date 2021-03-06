"use strict";

const { books } = require("./books.js");

let bookHandler = (req, res) => {
  let email1 = req.query.email;
  books
    .find({ email: email1 })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.statu(500).send("error there is no data to get");
    });
};

let createHandler = async (req, res) => {
  let { title, author, description, status, email } = req.body;
  // await   books.create({
  //   title: title1,
  //   author: author1,
  //   description: description1,
  //   status: status1,
  //   email: email1
  // })

  await books.create(req.body);

  books
    .find({ email: email })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(500).send("error there is no recived data");
    });
};

let deleteHandler = (req, res) => {
  // let id = req.query.id;
  let id = req.params.bookID;
  console.log(id);
  let email1 = req.query.email;
  console.log(email1);
  books
    .findByIdAndDelete({ _id: id })
    .then(() => {
      books.find({ email: email1 }).then((data) => {
        res.status(200).json(data);
      });
    })
    .catch((error) => {
      res.status(500).send("error there is no file");
    });
};

function updateHandler(req, res) {
    console.log(req.body);
  let { title, author, description, status, id, email1 } = req.body;
  books.findByIdAndUpdate(
    id,
    { title, author, description, status },
    (error, updatedData) => {
      if (error) {
        console.log("error in updating");
      } else {
        console.log("updatedData", updatedData);
        books.find({ email: email1 }, function (error, bookData) {
          if (error) {
            console.log("error in getting data", error);
          } else {
            res.send(bookData);
          }
        });
      }
    }
  );
}

module.exports = {
  bookHandler,
  createHandler,
  deleteHandler,
  updateHandler,
};

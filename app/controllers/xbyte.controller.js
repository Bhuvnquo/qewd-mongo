const db = require("../models");
const xbyteModel = db.xbyteModel;
const titleModel = db.titleModel;
const mongoose = require("mongoose");

// Create and Save a new Tutorial
// Retrieve all Tutorials from the database.
exports.findAllShow = (req, res) => {
  const title = req.query.title;
  console.log("\n xb-", title);
  const condition = title
    ? { title: { $regex: new RegExp(title), $options: "i" } }
    : {};

  xbyteModel
    .find(condition)
    .select("reelgood_id title thumbnail horizontal_thumbnail content_type ")
    .limit(10)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

exports.findAllTitle = (req, res) => {
  const title = req.query.title;
  const condition = title
    ? { title: { $regex: new RegExp(title), $options: "i" } }
    : {};

  titleModel
    .find(condition)
    .limit(10)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

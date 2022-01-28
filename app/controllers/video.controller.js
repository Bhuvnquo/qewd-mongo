const db = require("../models");
const videoModel = db.videoModel;

// Create and Save a new Tutorial
// Retrieve all Tutorials from the database.
exports.findAllVideo = (req, res) => {
  const title = req.query.title;
  console.log("\n vi-", title);
  var condition = title
    ? { title: { $regex: new RegExp(title), $options: "i" } }
    : {};

  videoModel
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

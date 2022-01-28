const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

db.xbyteModel = require("./xbyte.model.js")(mongoose);
db.videoModel = require("./video.model.js")(mongoose);
db.titleModel = require("./title.model.js")(mongoose);

module.exports = db;

const xbyteCtrl = require("../controllers/xbyte.controller.js");
var router = require("express").Router();

router.get("/", xbyteCtrl.findAllShow);
router.get("/title", xbyteCtrl.findAllTitle);

module.exports = router;

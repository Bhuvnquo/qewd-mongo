const videoCtrl = require("../controllers/video.controller.js");
var router = require("express").Router();

router.get("/", videoCtrl.findAllVideo);

module.exports = router;

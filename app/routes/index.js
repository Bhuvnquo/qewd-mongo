const router = require("express").Router();
const videoRoutes = require("./video.routes");
const xbyteRoutes = require("./xbyte.routes");

router.get("/", (req, res) => {
  res.status(200);
  res.json({ status: true, message: "Hey you i'm here..." });
});

router.use("/videos", videoRoutes);
router.use("/xbyte", xbyteRoutes);

module.exports = router;

const express = require("express");
const router = express.Router();
const stationRouter = require("../controllers/stations/index");

router.use("/api", stationRouter);

module.exports = router;
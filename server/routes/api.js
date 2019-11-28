const express = require("express");
const router = express.Router();
const stationRouter = require("../controllers/stations/index");
const accountRouter =  require("../controllers/accounts/index");

router.use("/api", stationRouter);
router.use("/api", accountRouter);

module.exports = router;
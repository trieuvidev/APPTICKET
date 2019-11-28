const express = require("express");
const stationController = require("./stations");

const router = express.Router();

router.post("/stations", stationController.createStations)
router.get("/stations", stationController.findStations)
router.get("/station/:id", stationController.findByIdStation)
router.put("/station/:id", stationController.updateStation)
router.delete("/station/:id", stationController.deleteStation)

module.exports = router;



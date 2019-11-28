const express = require("express");
const accountController = require("./accounts");

const router = express.Router();

router.post("/registers", accountController.registerUsers)

module.exports = router;
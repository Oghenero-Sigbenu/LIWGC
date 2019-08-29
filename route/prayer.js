const express = require("express");
const prayerController = require("../controllers/prayer");

const route = express.Router();

route.post("/create", prayerController.createPrayer);

module.exports = route;


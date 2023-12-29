const express = require("express");
const router = express.Router();

const homeController = require("../controller/home-controller");
router.get("/macbook", homeController.macbook);

module.exports = router;

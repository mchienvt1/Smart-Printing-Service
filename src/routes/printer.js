const express = require('express');
const router = express.Router();

const controller = require("../app/controllers/PrinterController");

router.get("/", controller.index);

router.get("/printerList", controller.printlist);

module.exports = router;
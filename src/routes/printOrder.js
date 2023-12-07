const express = require('express');
const router = express.Router();

const printOrderController = require('../app/controllers/PrintOrderController');
const printerController = require('../app/controllers/PrinterController');


router.get('/modify', printOrderController.modify);
router.post('/store', printOrderController.store);
router.post('/searchPrinter',printerController.index);

module.exports = router;
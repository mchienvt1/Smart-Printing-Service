const express = require('express');
const router = express.Router();

const printerController = require('../app/controllers/PrinterController');

router.get('/', printerController.index);

router.get('/:slugPrinter', printerController.list);

module.exports = router;
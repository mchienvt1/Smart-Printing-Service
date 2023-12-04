const express = require('express');
const router = express.Router();

const printerController = require('../app/controllers/PrinterController');

router.get('/:slug', printerController.list);

router.get('/', printerController.index);

module.exports = router;
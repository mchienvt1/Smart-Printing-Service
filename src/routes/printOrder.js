const express = require('express');
const router = express.Router();

const printOrderController = require('../app/controllers/PrintOrderController');

router.get('/modify', printOrderController.modify);
router.post('/store', printOrderController.store);

module.exports = router;
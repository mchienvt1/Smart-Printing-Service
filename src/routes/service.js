const express = require('express');
const router = express.Router();

const serviceController = require('../app/controllers/ServiceController');

router.get('/', serviceController.index);

<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;
>>>>>>> master

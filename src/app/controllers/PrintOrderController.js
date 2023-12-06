const PrintOrder = require('../models/printOrder');

class PrintOrderController {

    // [GET] /courses/create
    modify(req, res) {
      res.render('pages/print/modify');
    }

    // [POST] /courses/store
    store(req, res, next) {
        const printOrder = new PrintOrder(req.body);
        printOrder.save()
        res.send('Save data successfully');
    }

}

module.exports = new PrintOrderController();
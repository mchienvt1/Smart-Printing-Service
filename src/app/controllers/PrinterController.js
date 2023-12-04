const Printer = require('../model/printer')

class PrinterController {
    // GET /printer
    // index(req, res) {
    //     Printer.find({}, function(err, printers) {
    //         if (!err){
    //             res.json(printers);
    //         } 
    //         else res.status(400).json({error: 'ERROR!'});
    //     });
    // }
    index(req, res) {
        res.render('printer');
    }

    // GET /printer/:slug
    list(req, res) {
        res.send('printer H6');
    }
}

module.exports = new PrinterController();

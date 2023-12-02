class PrinterController {
    // GET /printer
    index(req, res) {
        res.render('printer');
    }

    // GET /printer/:slug
    list(req, res) {
        res.send('printer H6');
    }
}

module.exports = new PrinterController();
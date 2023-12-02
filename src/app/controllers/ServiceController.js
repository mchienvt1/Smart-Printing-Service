class ServiceController {
    index(req, res) {
        res.render('service');
    }
}

module.exports = new ServiceController();
// const { index } = require('./PrinterController');

module.exports.index = async (req, res) => {
    
    res.render('pages/home/index',{
        pageTitle: "Trang chủ",
        currentURL: req.url,
    });

    // res.send('home page');
}
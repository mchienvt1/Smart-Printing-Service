const Printer = require('../models/printer')

// GET /printer
module.exports.index = async (req, res) => {
        try {
            const data = await Printer.find({});
            res.json(data);
        }  catch (err) {
            res.status(400).json({error: err});

        }
    }

// GET /printer/:slugPrinter
module.exports.list = async (req, res) => {
    res.send('printer H6');
}
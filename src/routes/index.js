const userMiddleware = require("../app/middlewares/userMiddleware");
const printOrderRouter = require("./printOrder")

const printerRouter = require('./printer');
const homeRouter = require('./home');
const userRoutes = require("./user");
const uploadNewfile = require('./uploadNewfile');

module.exports = (app) => {

    app.use(userMiddleware.infoUser);

    app.use('/print',printOrderRouter);

    app.use('/', homeRouter);
    
    app.use('/searchPrinter', printerRouter);

    app.use("/user", userRoutes);

    app.use("/uploadNewfile", uploadNewfile);
};

const userMiddleware = require("../app/middlewares/userMiddleware");

const printerRouter = require('./printer');
const homeRouter = require('./home');
const serviceController = require('./service');
const userRoutes = require("./user");

module.exports = (app) => {

    app.use(userMiddleware.infoUser);

    app.use('/', homeRouter);
    
    app.use('/searchPrinter', printerRouter);
    
    app.use('/service', serviceController);

    app.use("/user", userRoutes);
};

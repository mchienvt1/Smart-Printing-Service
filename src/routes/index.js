const printerRouter = require('./printer');
const homeRouter = require('./home');
const serviceController = require('./service');

module.exports = (app) => {
    app.use('/printer', printerRouter);

    app.use('/', homeRouter);

    app.use('/service', serviceController);
};
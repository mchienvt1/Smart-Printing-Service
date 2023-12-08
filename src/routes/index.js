const userMiddleware = require("../app/middlewares/userMiddleware");
const printOrderRouter = require("./printOrder");

const printerRouter = require("./printer");
const homeRouter = require("./home");
const userRoutes = require("./user");
const fileRoutes = require('./uploadNewfile');
const buyRouter = require("./buy");

module.exports = (app) => {
  app.use(userMiddleware.infoUser);

  app.use("/", homeRouter);

  app.use('/upfile', fileRoutes);

  // app.use('/api', fileRoutes);


  app.use('/print',printOrderRouter);
  app.use("/searchPrinter", printerRouter);

  app.use("/user", userRoutes);
  app.use("/buy", buyRouter);
};

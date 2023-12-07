const userMiddleware = require("../app/middlewares/userMiddleware");
const printOrderRouter = require("./printOrder");

const printerRouter = require("./printer");
const homeRouter = require("./home");
//const serviceController = require("./service");
const userRoutes = require("./user");
const uploadNewfile = require("./uploadNewfile");
const buyRouter = require("./buy");

module.exports = (app) => {
  app.use(userMiddleware.infoUser);

  app.use("/", homeRouter);

  app.use("/searchPrinter", printerRouter);

  // app.use("/service", serviceController);

  app.use("/user", userRoutes);
  app.use("/buy", buyRouter);
};

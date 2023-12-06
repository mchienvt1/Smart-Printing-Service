const express = require("express");
const multer = require("multer");
const router = express.Router();
const upload = multer();
const controller = require("../app/controllers/UserController");
const validate = require("../app/validates/userValidate");
const authMiddleware = require("../app/middlewares/authMiddleware");
// const uploadCloud = require("../../middlewares/admin/uploadCloud.middleware");

// router.patch(
//   "/:id/update",
//   upload.single("avatar"),
// //   uploadCloud.upload,
//   controller.update
// );

router.get("/login", controller.login);

router.post("/login", validate.loginPost, controller.loginPost);

router.get("/logout", controller.logout);

router.get("/info", authMiddleware.requireAuth, controller.info);

module.exports = router;

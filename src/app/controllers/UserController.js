const md5 = require("md5");

const User = require("../models/user");
// const Cart = require("../../models/cart.model");
// const Order = require("../../models/order.model");
const mongoose = require("mongoose");

// const paginationHelper = require("../../helpers/pagination");

// [GET] /user/login
module.exports.login = async (req, res) => {
  res.render("pages/user/login", {
    pageTitle: "Đăng nhập tài khoản",
  });
};

// [POST] /user/login
module.exports.loginPost = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = await User.findOne({
    email: email,
    deleted: false,
  });

  if (!user) {
    req.flash("error", "Email không tồn tại!");
    res.redirect("back");
    return;
  }

  if (password !== user.password) {
    req.flash("error", "Sai mật khẩu!");
    res.redirect("back");
    return;
  }

  if (user.status === "inactive") {
    req.flash("error", "Tài khoản đang bị khóa!");
    res.redirect("back");
    return;
  }

  res.cookie("tokenUser", user.tokenUser);

  res.redirect("/");
};

// [GET] /user/logout
module.exports.logout = async (req, res) => {
  res.clearCookie("tokenUser");
  res.clearCookie("cartId");
  res.redirect("/");
};

// [GET] /user/info
module.exports.info = async (req, res) => {
  res.render("pages/user/info", {
    pageTitle: "Thông tin tài khoản",
    User: User,
  });
};

//[POST] /user/info
module.exports.update = (req, res, next) => {
  User.updateOne({ _id: req.params.id }, data)
    .then(() => res.redirect("/user/info"))
    .catch(next);
};

//[GET] /user/historyprint
module.exports.historprint = async (req, res) => {
  res.render("pages/user/historyprint", {
    User: User,
  });
};
const mongoose = require("mongoose");
const generate = require("../helpers/generate.js");

const userSchema = new mongoose.Schema(
  {
    fullName: String,
    email: String,
    password: String,
    faculty: String,
    numberOfPage: Number,
    numberofA0: Number,
    numberofA1: Number,
    numberofA2: Number,
    numberofA3: Number,
    numberofA4: Number,
    tokenUser: {
      type: String,
      default: generate.generateRandomString(20),
    },
    phone: String,
    status: {
      type: String,
      default: "active",
    },
    deleted: {
      type: Boolean,
      default: false,
    },
    deletedAt: Date,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema, "users");

module.exports = User;

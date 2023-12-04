const mongoose = require("mongoose");

const printerSchema = new mongoose.Schema(
    {
      printer_id: String,
      brand: String,
      status: Boolean,
      location: String,
      description: String,
    },
    {
      timestamps: true,
    }
  );

const Printer = mongoose.model("Printer", printerSchema, "printers");

module.exports = Printer;
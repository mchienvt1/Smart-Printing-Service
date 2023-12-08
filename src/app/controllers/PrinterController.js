const Printer = require('../models/printer')

const paginationHelper = require("../helpers/pagination");
// const filterPriceHelper = require("../../helpers/filterPrice");
// const productsHelper = require("../../helpers/products");

// [GET] /searchPrinter/slugPrinter
module.exports.printlist = async (req, res) => {
  let match = {};
  if (req.query.keyword) {
    match = [
      { location: new RegExp(req.query.keyword, "i") }
    ];
  }
  match.state = "available";
  match.status = "active";

  const printer = await Printer.find(match);
  
  console.log(printer);
  res.render("pages/search-printer/printerlist", {
    pageTitle: "Kết quả tìm kiếm",
    keyword: req.query.keyword,
    printers: printer,
  });
}

// [GET] /searchPrinter
module.exports.index = async (req, res) => {
  let match ={};
  match.status = "active";
  const printer = await Printer.find(match);
  // console.log(printer);
  // End Pagination 
  res.render('pages/search-printer/index', {
    pageTitle: "Tìm máy in",
    printers: printer,
    // pagination: objectPagination, 
  }
  );
};
const Printer = require('../models/printer')

const paginationHelper = require("../helpers/pagination");
// const filterPriceHelper = require("../../helpers/filterPrice");
// const productsHelper = require("../../helpers/products");

// [GET] /searchPrinter/slugPrinter
module.exports.printlist = async (req, res) => {
  let match = {};
  let newPrinter = [];

  if (req.query.keyword) {
    match.$or = [
      { title: new RegExp(req.query.keyword, "i") },
      { state: new RegExp(req.query.keyword, "i") },
    ];
  }

  if (req.query.status) {
    match.state = new RegExp(req.query.state, "i");
  }

  match.deleted = false;
  match.status = "active";

  const printer = await Printer.find(match);

  // if (req.query.minPrice || req.query.maxPrice) {
  //   let filterPrice = filterPriceHelper(products, req.query.minPrice, req.query.maxPrice);
  //   newPrinter = productsHelper.priceNewProducts(filterPrice)
  // } else newPrinter = productsHelper.priceNewProducts(printers); 
  
  // Pagination 
  const countPrinter = newPrinter.length;
  let objectPagination = paginationHelper(
    {
      currentPage: 1,
      limitItems: 25,
    },
    req.query,
    countPrinter
  );

  newPrinter = newPrinter.slice(objectPagination.skip, objectPagination.skip + objectPagination.limitItems);
  // End Pagination 
  
  res.render("pages/search-printer/printerlist", {
    pageTitle: "Kết quả tìm kiếm",
    keyword: req.query.keyword,
    printers: printer,
    pagination: objectPagination,
  });
}

// [GET] /searchPrinter
module.exports.index = async (req, res) => {
  // let match = {};
  // // let newPrinters = [];

  // if (req.query.state) {
  //   match.state = new RegExp(req.query.state, "i");
  // }

  // match.deleted = false;
  // match.status = "active";

  // const printer = await Printer.find(match).sort({ position: "desc" });

  // if (req.query.minPrice || req.query.maxPrice) {
  //   let filterPrice = filterPriceHelper(printers, req.query.minPrice, req.query.maxPrice);
  //   newPrinters = productsHelper.priceNewProducts(filterPrice)
  // } else newPrinters = productsHelper.priceNewProducts(printers);

  // Pagination 
  // const countPrinters = newPrinters.length;
  // let objectPagination = paginationHelper(
  //   {
  //     currentPage: 1,
  //     limitItems: 25,
  //   },
  //   req.query,
  //   countPrinters
  // );
  let match ={};
  match.status = "active";
  const printer = await Printer.find(match);
  console.log(printer);
  // End Pagination 
  res.render('pages/search-printer/index', {
    pageTitle: "Tìm máy in",
    printers: printer,
    // pagination: objectPagination, 
  }
  );
};
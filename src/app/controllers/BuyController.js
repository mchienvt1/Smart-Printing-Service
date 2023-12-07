// class BuyController {
//   index(req, res) {
//     res.render("buy");
//   }
// }

// module.exports = new BuyController();

module.exports.index = async (req, res) => {
  res.render("pages/buy/index", {
    pageTitle: "Mua trang in",
    currentURL: req.url,
  });

  // res.send('home page');
};

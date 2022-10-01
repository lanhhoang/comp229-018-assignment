var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Home" });
});

router.get("/about-me", function (req, res, next) {
  res.render("index", { title: "About Me" });
});

router.get("/projects", function (req, res, next) {
  res.render("index", { title: "Projects" });
});

router.get("/services", function (req, res, next) {
  res.render("index", { title: "Services" });
});

router.get("/contact", function (req, res, next) {
  res.render("index", { title: "Contact" });
});

module.exports = router;

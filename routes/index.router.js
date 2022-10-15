/*
File name: routes/index.router.js
Student name: Cong Lanh Hoang
Student ID: 301210743
Date: October 14, 2022
*/

var express = require("express");
var router = express.Router();
let indexController = require("../controllers/index.controller");

/* GET home page. */
router.get("/", indexController.home);

/* GET About Me page. */
router.get("/about-me", indexController.about_me);

/* GET Projects page. */
router.get("/projects", indexController.projects);

/* GET Services page. */
router.get("/services", indexController.services);

/* GET Contact page. */
router.get("/contact", indexController.contact);

module.exports = router;

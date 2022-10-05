/*
File name: routes/users.js
Student name: Cong Lanh Hoang
Student ID: 301210743
Date: Oct 5, 2022
*/

var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;

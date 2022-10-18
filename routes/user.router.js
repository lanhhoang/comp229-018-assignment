/*
File name: routes/user.router.js
Student name: Cong Lanh Hoang
Student ID: 301210743
Date: October 14, 2022
*/

var express = require("express");
var router = express.Router();
let userController = require('../controllers/user.controller');

/* GET users listing. */
router.get("/", userController.index);

module.exports = router;

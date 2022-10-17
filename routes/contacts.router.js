/*
File name: routes/contact.router.js
Student name: Cong Lanh Hoang
Student ID: 301210743
Date: October 16, 2022
*/

var express = require("express");
var router = express.Router();
let contactsController = require("../controllers/contacts.controller");

/* GET contacts listing. */
router.get("/", contactsController.contactIndex);

module.exports = router

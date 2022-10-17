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

/* GET route for displaying the Add page - CREATE operation */
router.get('/add', contactsController.displayAddPage);

/* POST route for processing the Add page - CREATE operation */
router.post("/add", contactsController.processAddPage);

/* DELETE contact. */
router.get("/delete/:id", contactsController.delete);

module.exports = router

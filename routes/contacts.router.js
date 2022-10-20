/*
File name: routes/contact.router.js
Student name: Cong Lanh Hoang
Student ID: 301210743
Date: October 16, 2022
*/

var express = require("express");
var router = express.Router();
let contactsController = require("../controllers/contacts.controller");
const requireAuth = require("../helpers/requireAuth");

/* GET contacts listing. */
router.get("/", requireAuth, contactsController.index);

/* GET route for displaying the Add page - CREATE operation */
router.get("/add", requireAuth, contactsController.displayAddPage);

/* POST route for processing the Add page - CREATE operation */
router.post("/add", requireAuth, contactsController.processAddPage);

/* GET route for displaying the Edit page - UPDATE operation */
router.get("/edit/:id", requireAuth, contactsController.displayEditPage);

/* POST route for processing the Edit page - UPDATE operation */
router.post("/edit/:id", requireAuth, contactsController.processEditPage);

/* DELETE contact. */
router.get("/delete/:id", requireAuth, contactsController.delete);

module.exports = router;

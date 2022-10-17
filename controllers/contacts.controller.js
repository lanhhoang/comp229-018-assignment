/*
File name: controllers/contact.controller.js
Student name: Cong Lanh Hoang
Student ID: 301210743
Date: October 16, 2022
*/

const Contact = require("../models/contact.model");

module.exports.contactIndex = function (req, res, next) {
  Contact.find((err, contacts) => {
    console.log(contacts);
    if (err) {
      return console.error(err);
    } else {
      res.render("contacts/index", {
        title: "Business Contact List",
        contacts: contacts,
      });
    }
  }).sort({ firstName: 1 });
};

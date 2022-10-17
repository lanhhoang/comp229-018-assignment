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

module.exports.displayAddPage = (req, res, next) => {
  const newContact = Contact();

  res.render("contacts/add_edit", {
    title: "Add New Contact",
    contact: newContact,
  });
};

module.exports.processAddPage = (req, res, next) => {
  const newContact = Contact({
    _id: req.body.id,
    firstName: req.body.first_name,
    lastName: req.body.last_name,
    phoneNumber: req.body.phone_number,
    email: req.body.email,
  });

  Contact.create(newContact, (err, contact) => {
    if (err) {
      console.error(err);
      res.end(err);
    } else {
      // refresh the contact list
      console.log(contact);
      res.redirect("/contacts");
    }
  });
};

module.exports.delete = (req, res, next) => {
  const id = req.params.id;

  Contact.remove({ _id: id }, (err) => {
    if (err) {
      console.error(err);
      res.end(err);
    } else {
      // refresh the contact list
      res.redirect("/contacts");
    }
  });
};

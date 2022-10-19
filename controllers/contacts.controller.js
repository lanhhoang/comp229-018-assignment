/*
File name: controllers/contact.controller.js
Student name: Cong Lanh Hoang
Student ID: 301210743
Date: October 16, 2022
*/

const Contact = require("../models/contact.model");

module.exports.index = (req, res, next) => {
  Contact.find((err, contacts) => {
    console.log(contacts);
    if (err) {
      return console.error(err);
    } else {
      res.render("contacts/index", {
        title: "Business Contact List",
        contacts: contacts,
        username: req.user ? req.user.username : "",
      });
    }
  }).sort({ firstName: 1 });
};

module.exports.displayAddPage = (req, res, next) => {
  const newContact = Contact();

  res.render("contacts/add_edit", {
    title: "Add New Contact",
    contact: newContact,
    username: req.user ? req.user.username : "",
  });
};

module.exports.processAddPage = (req, res, next) => {
  const newContact = Contact({
    _id: req.body.id,
    name: req.body.name,
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

module.exports.displayEditPage = (req, res, next) => {
  const id = req.params.id;

  Contact.findById(id, (err, contact) => {
    if (err) {
      console.error(err);
      res.end(err);
    } else {
      // show the edit view
      res.render("contacts/add_edit", {
        title: "Edit Contact",
        contact: contact,
        username: req.user ? req.user.username : "",
      });
    }
  });
};

module.exports.processEditPage = (req, res, next) => {
  const id = req.params.id;
  const updatedContact = Contact({
    _id: req.body.id,
    name: req.body.name,
    phoneNumber: req.body.phone_number,
    email: req.body.email,
  });

  Contact.updateOne({ _id: id }, updatedContact, (err) => {
    if (err) {
      console.error(err);
      res.end(err);
    } else {
      // refresh the contact list
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

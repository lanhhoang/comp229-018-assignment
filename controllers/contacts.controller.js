/*
File name: controllers/contact.controller.js
Student name: Cong Lanh Hoang
Student ID: 301210743
Date: October 16, 2022
*/

const Contact = require("../models/contact.model");
const getErrorMessage = require("../helpers/getErrorMessage");

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
  }).sort({ name: "asc" });
};

module.exports.displayAddPage = (req, res, next) => {
  const newContact = Contact();

  res.render("contacts/add_edit", {
    title: "Add New Contact",
    contact: newContact,
    username: req.user ? req.user.username : "",
    messages: "",
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
      const message = getErrorMessage(err);
      req.flash("error", message);

      res.render("contacts/add_edit", {
        title: "Add New Contact",
        contact: newContact,
        username: req.user ? req.user.username : "",
        messages: req.flash("error"),
      });
    } else {
      // refresh the contact list
      console.log(contact);
      res.redirect("/contacts");
    }
  });
};

module.exports.displayEditPage = (req, res, next) => {
  const id = req.params.id;

  Contact.findById(id, null, {}, (err, contact) => {
    // If document is not exist, "err" and "contact" are null
    if (!contact) {
      console.error(err);
      res.render("404", { title: "404 Not Found" });
    } else {
      // show the edit view
      res.render("contacts/add_edit", {
        title: "Edit Contact",
        contact: contact,
        username: req.user ? req.user.username : "",
        messages: "",
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

  Contact.updateOne(
    { _id: id },
    updatedContact,
    { runValidators: true },
    (err) => {
      if (err) {
        console.error(err);
        const message = getErrorMessage(err);
        req.flash("error", message);

        res.render("contacts/add_edit", {
          title: "Edit Contact",
          contact: updatedContact,
          username: req.user ? req.user.username : "",
          messages: req.flash("error"),
        });
      } else {
        // refresh the contact list
        res.redirect("/contacts");
      }
    }
  );
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

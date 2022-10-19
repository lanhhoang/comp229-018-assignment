/*
File name: models/contact.model.js
Student name: Cong Lanh Hoang
Student ID: 301210743
Date: October 16, 2022
*/

let mongoose = require("mongoose");

// Create Contact model class
let ContactSchema = mongoose.Schema(
  {
    name: String,
    phoneNumber: {
      type: String,
      match: [/[0-9]{3}-[0-9]{3}-[0-9]{4}/, "Please fill a valid phone number"],
    },
    email: {
      type: String,
      match: [/.+\@.+\..+/, "Please fill a valid e-mail address"],
    },
  },
  {
    collection: "contacts",
  }
);

module.exports = mongoose.model("Contact", ContactSchema);

/*
File name: controllers/index.controller.js
Student name: Cong Lanh Hoang
Student ID: 301210743
Date: October 14, 2022
*/

const User = require("../models/user.model");

module.exports.index = (req, res, next) => {
  User.find({}, "-password -salt", (err, users) => {
    console.log(users);

    if (err) {
      return console.error(err);
    } else {
      res.render("users/index", {
        title: "User List",
        users: users,
      });
    }
  });
};

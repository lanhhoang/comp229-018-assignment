/*
File name: config/local.js
Student name: Cong Lanh Hoang
Student ID: 301210743
Date: October 18, 2022
*/

const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/user.model");

const authLocal = (username, password, done) => {
  console.log("[DEBUG] authLocal function");

  User.findOne({ username: username }, (err, user) => {
    if (err) {
      return done(err);
    }

    if (!user) {
      return done(null, false, {
        message: "Unknown user",
      });
    }

    if (!user.authenticate(password)) {
      return done(null, false, {
        message: "Invalid password",
      });
    }

    return done(null, user);
  });
};

module.exports = () => {
  console.log("[DEBUG] LocalStrategy function");

  passport.use(new LocalStrategy(authLocal));
};

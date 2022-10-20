/*
File name: controllers/index.controller.js
Student name: Cong Lanh Hoang
Student ID: 301210743
Date: October 14, 2022
*/

const User = require("../models/user.model");
const passport = require("passport");

module.exports.index = (req, res, next) => {
  User.find({}, "-password -salt", (err, users) => {
    console.log(users);

    if (err) {
      return console.error(err);
    } else {
      res.render("users/index", {
        title: "User List",
        users: users,
        username: req.user ? req.user.username : "",
      });
    }
  });
};

module.exports.renderSignUp = (req, res, next) => {
  if (!req.user) {
    // create a new empty User object
    const newUser = User();

    res.render("auth/signup", {
      title: "Sign Up Form",
      user: newUser,
      messages: req.flash("error"),
    });
  } else {
    return res.redirect("/");
  }
};

module.exports.signUp = (req, res, next) => {
  const {
    id: _id,
    first_name: firstName,
    last_name: lastName,
    username,
    email,
    password,
    password_confirmation: passwordConfirmation,
  } = req.body;

  const userParams = {
    _id,
    firstName,
    lastName,
    username,
    email,
    password,
  };

  if (!req.user && password === passwordConfirmation) {
    console.log(req.body);

    const user = User(userParams);
    user.provider = "local";
    console.log(user);

    user.save((err) => {
      if (err) {
        let message = getErrorMessage(err);

        req.flash("error", message);
        return res.render("auth/signup", {
          title: "Sign Up Form",
          user: user,
          messages: req.flash("error"),
        });
      }

      req.login(user, (err) => {
        if (err) return next(err);
        return res.redirect("/contacts");
      });
    });
  } else {
    return res.redirect("/");
  }
};

module.exports.renderSignIn = (req, res, next) => {
  if (!req.user) {
    res.render("auth/signin", {
      title: "Sign In Form",
      messages: req.flash("error") || req.flash("info"),
    });
  } else {
    console.log(req.user);
    return res.redirect("/contacts");
  }
};

module.exports.signIn = (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: req.session.url || "/contacts",
    failureRedirect: "/users/signin",
    failureFlash: true,
  })(req, res, next);

  delete req.session.url;
};

module.exports.signOut = (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
  });
  res.redirect("/users/signin");
};

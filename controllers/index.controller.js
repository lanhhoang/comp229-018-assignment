/*
File name: controllers/index.controller.js
Student name: Cong Lanh Hoang
Student ID: 301210743
Date: October 14, 2022
*/

exports.home = function (req, res, next) {
  res.render("index", {
    title: "Home",
    username: req.user ? req.user.username : "",
  });
};

exports.about_me = function (req, res, next) {
  res.render("index", {
    title: "About Me",
    username: req.user ? req.user.username : "",
  });
};

exports.projects = function (req, res, next) {
  res.render("index", {
    title: "Projects",
    username: req.user ? req.user.username : "",
  });
};

exports.services = function (req, res, next) {
  res.render("index", {
    title: "Services",
    username: req.user ? req.user.username : "",
  });
};

exports.contact = function (req, res, next) {
  res.render("index", {
    title: "Contact",
    username: req.user ? req.user.username : "",
  });
};

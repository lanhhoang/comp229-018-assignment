/*
File name: controllers/index.controller.js
Student name: Cong Lanh Hoang
Student ID: 301210743
Date: October 14, 2022
*/

exports.home = function (req, res, next) {
  res.render("index", { title: "Home" });
};

exports.about_me = function (req, res, next) {
  res.render("index", { title: "About Me" });
};

exports.projects = function (req, res, next) {
  res.render("index", { title: "Projects" });
};

exports.services = function (req, res, next) {
  res.render("index", { title: "Services" });
};

exports.contact = function (req, res, next) {
  res.render("index", { title: "Contact" });
};

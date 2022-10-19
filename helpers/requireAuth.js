/*
File name: helpers/requireAuth.js
Student name: Cong Lanh Hoang
Student ID: 301210743
Date: October 19, 2022
*/

// helper function for guard purposes
const requireAuth = (req, res, next) => {
  // check if the user is logged in
  if (!req.isAuthenticated()) {
    req.session.url = req.originalUrl;
    return res.redirect("/users/signin");
  }
  next();
};

module.exports = requireAuth;

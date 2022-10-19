/*
File name: routes/user.router.js
Student name: Cong Lanh Hoang
Student ID: 301210743
Date: October 14, 2022
*/

var express = require("express");
var router = express.Router();
let userController = require('../controllers/user.controller');
const requireAuth = require("../helpers/requireAuth");

/* GET users listing. */
router.get("/", requireAuth, userController.index);

/* GET route for rendering the Sign Up page */
router.get("/signup", userController.renderSignUp);

/* POST route for processing the Sign Up functionality */
router.post("/signup", userController.signUp);

/* GET route for rendering the Sign In page */
router.get("/signin", userController.renderSignIn);

/* POST route for processing the Sign Up functionality */
router.post("/signin", userController.signIn);

/* GET route for processing the Sign Out functionality */
router.get("/signout", userController.signOut);

module.exports = router;

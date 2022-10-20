/*
File name: config/app.js
Student name: Cong Lanh Hoang
Student ID: 301210743
Date: September 30, 2022
*/

// import 3rd party modules
var createError = require("http-errors"); // error handler
var express = require("express"); // Express
var path = require("path"); // use relative path in our application; don't need to write absolute path; path will figure out the directory
var cookieParser = require("cookie-parser"); // Parse Cookie header and populate req.cookies with an object keyed by the cookie names
var logger = require("morgan"); // HTTP logger
let compress = require("compression");
let bodyParser = require("body-parser");
let methodOverride = require("method-override");
let session = require("express-session");
let flash = require("connect-flash");
let passport = require("passport");

// import routers
var indexRouter = require("../routes/index.router");
var usersRouter = require("../routes/user.router");
var contactsRouter = require("../routes/contacts.router");

// instantiate new express object
var app = express();

app.use(
  session({
    saveUninitialized: true,
    resave: true,
    secret: "sessionSecret",
  })
);

// view engine setup
app.set("views", path.join(__dirname, "../views")); // set the location of views folder
app.set("view engine", "ejs"); // Set ejs as engine to render view template

app.use(logger("dev")); // use logger to log HTTP request
app.use(express.json()); // express render json
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../public"))); // set static folder to public folder
app.use(express.static(path.join(__dirname, "../node_modules"))); // second static folder, contain bootstrap and fontawesome

// Set up passport
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use("/", indexRouter); // defined paths after root path
app.use("/users", usersRouter); // defined paths after users root path
app.use("/contacts", contactsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error"); // render views/error.js
});

module.exports = app; // export app instance

#!/usr/bin/env node

/*
File name: server.js
Student name: Cong Lanh Hoang
Student ID: 301210743
Date: October 18, 2022
*/

/**
 * Module dependencies.
 */

var dbConfig = require("./config/db"); // Import DB config
var appConfig = require("./config/app");
var passportConfig = require("./config/passport"); // Import Passport config
var debug = require("debug")("comp229.018.assignment1:server");
var http = require("http");

/**
 * Get port from environment and store in Express.
 */

var db = dbConfig(); // Start DB connection
var port = normalizePort(process.env.PORT || "3000");
appConfig.set("port", port);

/**
 * Create HTTP server.
 */

var server = http.createServer(appConfig);

/**
 * Listen on provided port, on all network interfaces.
 */
let passport = passportConfig();
server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  debug("Listening on " + bind);
  console.log(`Express app listening on port http://localhost:${port}`);
}

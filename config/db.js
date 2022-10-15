/*
File name: config/db.js
Student name: Cong Lanh Hoang
Student ID: 301210743
Date: October 14, 2022
*/

let atlasDB =
  "mongodb+srv://dbuser:PZO6wjxARk92rkCr@cluster018.so2vhuv.mongodb.net/appdb?retryWrites=true&w=majority";

let mongoose = require("mongoose");

module.exports = function () {
  // Connect to the database
  mongoose.connect(atlasDB);

  let mongodb = mongoose.connection;
  mongodb.on("error", console.error.bind(console, "Connection Error:"));
  mongodb.once("open", () => {
    console.log("[DEBUG] Connected to MongoDB");
  });

  return mongodb;
};

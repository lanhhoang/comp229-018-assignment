/*
File name: models/user.model.js
Student name: Cong Lanh Hoang
Student ID: 301210743
Date: October 18, 2022
*/

let mongoose = require("mongoose");
let crypto = require("crypto");

// Create User model class
let UserSchema = mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: {
      type: String,
      match: [/.+\@.+\..+/, "Please fill a valid e-mail address"],
    },
    username: {
      type: String,
      unique: true,
      trim: true,
      required: "Username is required",
    },
    password: {
      type: String,
      validate: [
        (password) => {
          return password && password.length > 6;
        },
        "Password should have at least 6 characters",
      ],
    },
    salt: String,
    provider: {
      type: String,
      required: "Provider is required",
    },
    providerId: String,
    providerData: {},
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: "users",
  }
);

UserSchema.virtual("fullName")
  .get(function () {
    return `${this.firstName} ${this.lastName}`;
  })
  .set(function (fullName) {
    [this.firstName = "", this.lastName = ""] = fullName.split(" ");
  });

// Middleware pre: before action
UserSchema.pre("save", function (next) {
  if (this.password) {
    this.salt = Buffer.from(
      crypto.randomBytes(16).toString("base64"),
      "base64"
    );
    this.password = this.hashPassword(this.password);
  }
  next();
});

// Middleware post: after action
UserSchema.post("save", function (next) {
  console.log(`The user "${this.username}" details were saved`);
});

// Declare instance methods
UserSchema.methods.hashPassword = function (password) {
  return crypto
    .pbkdf2Sync(password, this.salt, 10000, 64, "sha512")
    .toString("base64");
};

UserSchema.methods.authenticate = function (password) {
  return this.password === this.hashPassword(password);
};

UserSchema.set("toJSON", {
  getters: true,
  virtual: true,
});

module.exports = mongoose.model("User", UserSchema);

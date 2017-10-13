var mongoose = require("mongoose");

// Create the Schema class
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Name is Required"
  },
  // password is a string, trim any trailing whitespace.
  // validate function that checks the length of the input
  // If it's less than six chars, mongoose will throw an error
  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [
      function(input) {
        return input.length >= 6;
      },
      "Password should be longer."
    ],
  },
  // email is a string, and it must be a unique one in our collection
  // must match our regex, which checks for email
  email: {
    type: String,
    unique: true,
    match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
  }

});

// Create the "User" model with our UserSchema schema
var User = mongoose.model("User", UserSchema);

// Export the User model, so it can be used in server.js with a require
module.exports = User;
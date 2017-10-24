const mongoose = require("mongoose");
const passLocalMon = require("passport-local-mongoose");

// Create the Schema class
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String
  },

  password: {
    type: String
  },
  
  email: {
    type: String
  },

  note: [{
    type: Schema.Types.ObjectId,
    ref: "Note"
 }],
 
  event: [{
    type: Schema.Types.ObjectId,
    ref: "Event"
 }],
 
  finance: [{
    type: Schema.Types.ObjectId,
    ref: "Finance"
 }]
 
});

UserSchema.plugin(passLocalMon);

// Create the "User" model with our UserSchema schema
const User = mongoose.model("User", UserSchema);

// Export the User model, so it can be used in server.js with a require
module.exports = User;
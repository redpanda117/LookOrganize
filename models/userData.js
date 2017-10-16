var mongoose = require("mongoose");

// Create the Schema class
var Schema = mongoose.Schema;

var UserDataSchema = new Schema({
    user_id:{
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    note: [{
        type: Schema.Types.ObjectId,
        ref: "Note"
     }]

});

// Create the "User" model with our UserSchema schema
var User = mongoose.model("UserData", UserDataSchema);

// Export the User model, so it can be used in server.js with a require
module.exports = UserData;
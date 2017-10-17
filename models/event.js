// require Mongoose
var mongoose = require('mongoose');

// Create Schema class
var Schema = mongoose.Schema;

var EventSchema = new Schema({
  // Just a string 
 //min length prevent empty entries
  body: {
    type: String,
    minlength: 1
  },
  start:{
      type: String,
      required: true
  },
  end:{
      type:String,
      require: true
  }
});

// Create the Event model with the EventSchema
var Event = mongoose.model("Event", EventSchema);

// Export the model
module.exports = Event;
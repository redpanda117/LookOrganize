// require Mongoose
const mongoose = require('mongoose');

// Create Schema class
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  // Just a string 
 //min length prevent empty entries
  body: {
    type: String,
    minlength: 1
  },
  day:{
    type: String,
    required: true
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
const Event = mongoose.model("Event", EventSchema);

// Export the model
module.exports = Event;
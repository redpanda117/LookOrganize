// require Mongoose
const mongoose = require('mongoose');

// Create Schema class
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  // Just a string 
 //min length prevent empty entries
  body: {
    type: String,
    minlength: 1
  }
});

// Create the Note model with the NoteSchema
const Note = mongoose.model("Note", NoteSchema);

// Export the model
module.exports = Note;
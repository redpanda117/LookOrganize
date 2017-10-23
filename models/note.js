// require Mongoose
const mongoose = require('mongoose');

// Create Schema class
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  title:{
    type: String,
    require:true
  },
  body: {
    type: String,
    minlength: 1
  }
});

// Create the Note model with the NoteSchema
const Note = mongoose.model("Note", NoteSchema);

// Export the model
module.exports = Note;
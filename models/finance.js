// require Mongoose
const mongoose = require('mongoose');

// Create Schema class
const Schema = mongoose.Schema;

const FinanceSchema = new Schema({
  body: {
    type: String,
    minlength: 1
  },
  cost: {
      type: String
  }   
});

// Create the Finance model with the FinanceSchema
const Finance = mongoose.model("Finance", FinanceSchema);

// Export the model
module.exports = Finance;
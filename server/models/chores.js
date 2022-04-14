const mongoose = require("mongoose")
import Account from "./user";

const Schema = mongoose.Schema;

const choreSchema = new Schema({
  user_id: {
    type:  mongoose.Schema.Types.ObjectId,
    ref: "Account",
  },
  name: {
    type: String,
    required: true,
  },
  details: {
    type: String
  },
  completed: {
    type: Boolean, 
    required: true
  },
})

const chore = mongoose.model('Chore', choreSchema)

module.exports = chore;
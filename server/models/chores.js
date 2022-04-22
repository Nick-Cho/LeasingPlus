const mongoose = require("mongoose")


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
  completed: {
    type: Boolean, 
    required: true
  },
})

const chore = mongoose.model('Chore', choreSchema)

module.exports = chore;
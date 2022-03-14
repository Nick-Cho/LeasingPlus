const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const roomSchema = newSchema({
  key: {type: String},
  rent: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const userSchema = newSchema({
  name:{
    type: String,
    trim: true,
    required: true
  },
  email:{
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  room:[roomSchema],
  password:{
    type:String,
    required:true,
    min:6,
    max:64,
  },
  landlord:{
    type: Boolean,
    required:true,
  },
  ... (!landlord) && {rentCollected:{
    type: Boolean,
  }},
  ...(!landlord) && {rent:{
    type: Number,
  }},
});

const user = mongoose.model('User', userSchema)
module.exports = user;
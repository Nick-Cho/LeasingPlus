const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const roomSchema = new Schema({
  key: {type: String},
  rent: {
    type: Number,
  },
  address: {
    type: String,
    required: true,
  },
});

const accountSchema = new Schema({
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
  secret:{
    type:String,
    required:true,
  },
  secretQuestion:{
    type:String,
    required:true,
  },
  room:[roomSchema],
  password:{
    type:String,
    required:true,
    min:6,
    max:64,
  },
  roommates:[{type: mongoose.Schema.Types.ObjectId, ref: "Account"}]
  ,
  tenants:[{type: mongoose.Schema.Types.ObjectId, ref: "Account"}]
  ,
  landlord:{
    type: Boolean,
    // required:true,
  },
  rentCollected:{
     type: Boolean,
  },
  rentPaid:{
    type: Boolean,
  },
  rent:{
    type: Number,
    trim: true,
  },
});

const account = mongoose.model('Account', accountSchema)
module.exports = account;
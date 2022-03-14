const mongoose = require("mongoose")

const Schema = mongoose.Schema;

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
  ... (landlord) && {rentCollected:{
    type: Boolean,
  }},
  ...(landlord) && {rent:{
    type: Number,
  }},
});

export default mongoose.model('User', userSchema);
import Account from "../models/user";
import cloudinary from "cloudinary";
const stripe = require('stripe')('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');
const mongoose = require("mongoose")

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
})

export async function searchUser(req,res){
  const {query} = req.params;
    // Checking if query is given
    if (!query) return res.send({message:"no query"});
  try{
    const user = await Account.find({
      $and: [
        {"landlord": false},
        {$or: [
          {"name": {$regex: query, $options: '/i'}},
          {"email": {$regex: query, $options: '/i'}}
        ]}
      ]
    }).limit(10).select('_id email name ');
    res.send({success:true, user});

  } catch(err){
    console.log(err);
    res.send({success: false, message: "Error in search user function"})
  }
}

export async function uploadImage(req,res){
  try{
    const result = await cloudinary.uploader.upload(req.files.image.path);
    console.log("uploaded image url: ", result );
    res.send({url: result.secure_url, //https
              public_id: result.public_id,            
  })
  } catch(err){
    console.log(err)
  }
}
export async function getUser(req,res){
  try{
    let {id} = req.params 
    if (typeof req.params.id == "string"){
      id = mongoose.Types.ObjectId(id)
    }
    // console.log("req.params.id from getUser: ",id)
    const user =  await Account.findOne({_id: id}).select('-password -secret -secretQuestion -roommates -rent')
    // console.log("User found: ", user);
    res.send({success:true, user})
  } catch(err){
    console.log(err);
  }
}

export async function payRent(req,res){
  const {user} = req.body;
  try{
    const customer = await stripe.customers.create({
      email: user.email,
      source: user._id,
    })
    const charge = await stripe.charges.create({
      // amount: ,
      currency: "cad",

    })
  } catch (err){
    console.log(err);
  }
}
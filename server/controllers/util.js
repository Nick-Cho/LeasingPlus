import Account from "../models/user";
import cloudinary from "cloudinary";
const stripe = require('stripe')('sk_test_51KstQhBKEerwsYTQkaycKBjNOWfjOet6p9hUvFqfQ6QFp7t24Yj4xTsB4Rr4XXRntFRLh6SSxiymP6drNuWcaqq8003WXwUjEY');
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

export async function stripeAccountOnboarding(req,res){
  const {user} = req.body;
  let status;
  try{
    const account = await stripe.accounts.create({type: 'express'});
    const accountLink = await stripe.accountLinks.create({
      account: account.id,
      refresh_url: 'https://localhost:3000/user/payments/stripe-return',
      return_url: 'https://localhost:3000/user/payments/stripe-return',
      type: 'account_onboarding',
    });
    res.send({stripe_id: account.id})
    status = "success";

  } catch (err){
    console.log(err);
    status = "error";
  }
}
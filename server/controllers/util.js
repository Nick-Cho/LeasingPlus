import Account from "../models/user";
import cloudinary from "cloudinary";
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
    const user =  await Account.findOne({_id: req.params.id}).select('-password -secret -secretQuestion -roommates -rentCollected -rentPaid -rent')
    // console.log("User found: ", user);
    res.send({success:true, user})
  } catch(err){
    console.log(err);
  }
}


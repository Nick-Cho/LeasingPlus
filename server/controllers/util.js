import Account from "../models/user";
import cloudinary from "cloudinary";

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
    res.json({url: result.secure_url, //https
              public_id: result.public_id,            
  })
  } catch(err){
    console.log(err)
  }
}
import Account from "../models/user";
import {hashPassword, comparePassword} from '../helpers/auth'
import jwt from "jsonwebtoken"

export async function register(req,res){
  const {name, email, password, secretQuestion, secret,landlord } = req.body;
  //Registration validation
  if (!name) return res.send({success: false, message: "Name is required"});
  // console.log("Passed name check")
  if (!email) return res.send({success: false, message: "Email is required"})
  if (!password || password.length < 6){
    return res.send({success: false, message: "Must Enter a password with 6 or more characters"});
  }
  
  // console.log("Passed password check")
  if (!secret) return res.send({success: false, message: "Answer to question required for account recovery"});
  // console.log("Passed secret check")
  const exist = await Account.findOne({"email": email});
  // console.log("Exist variable output: ", exist)
  if (exist) return res.send({success: false, message: "Email already registered"});
  // console.log("Passed duplicate error check")
  const hashedPassword = await hashPassword(password);
  const account = new Account({
    name: name,
    email: email,
    password: hashedPassword,
    secretQuestion: secretQuestion,
    secret: secret,
    landlord: landlord,
  });
  try{ 
    account.save();
    return res.status(200).send({
      success:true, message: "Succesfully Registered!"
    })
  } 
  catch(err){
    console.log("Register endpoint error: ", err);
    return res.status(400).send({message:"Error in register endpoint"})
  }
}

export async function login(req,res){
  try{
    const {email,password} = req.body;
    //finding user with same email
    const user = await Account.findOne({"email": email});
    if (!user) return res.send({success: false, message: "Email not registered"});
    // console.log(password, user);
    //checking password
    const match = await comparePassword(password, user.password);
    if (!match) return res.send({success: false, message: "Password is incorrect"});

    const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET,{
      expiresIn: "7d",
    })

    res.send({success:true, message: "Login Success", token, user});

  } catch (err){
    console.log("Error in login endpoint ", err);
    res.send({success: false, message: "Error in login endpoint"});
  }
}

export async function forgotPassword(req,res){
  try{
    const {email, newPassword, secretQuestion, secret} = req.body;
    console.log(secretQuestion, secret)
    //Checking if user with the email provided exists
    const user = await Account.findOne({"email": email});
    if (!user) return res.send({success: false, message: "Email not registered"});
    
    if (newPassword == user.password){ return res.send({success: false, message: "Don't use a previous password"})}
    //checking if user's password recovery matches up with registered user's data
    if ((user.secret != secret) || (user.secretQuestion != secretQuestion)){
      return res.send({success: false, message: "Password recovery question answered incorrectly"})
    }
    else{
      const hashed = await hashPassword(newPassword);
      await Account.findByIdAndUpdate(user._id ,{password: hashed});
      return res.send({success:true, message: "Password Changed Succesfully"})
    }
  } catch(err) {
    console.log(err)
    return res.send({message: "Something went wrong, try again "})
  }
}
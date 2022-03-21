import Account from "../models/user";
import {hashPassword} from '../helpers/auth'

export async function register(req,res){
  const {name, email, password, secretQuestion, secret } = req.body;
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
  if (exist.email === email) return res.json({success: false, message: "Email already registered"});
  // console.log("Passed duplicate error check")
  const hashedPassword = await hashPassword(password);
  const account = new Account({
    name: name,
    email: email,
    password: hashedPassword,
    secretQuestion: secretQuestion,
    secret: secret,
  });
  try{ 
    account.save();
    return res.status(200).send({
      ok: true,
    })
  } 
  catch(err){
    console.log("Register endpoint error: ", err);
    return res.status(400).send({message:"Error in register endpoint"})
  }
}

export async function login(req,res){
  try{
    
  } catch (err){
    console.log("Error in login endpoint ", err);
  }
}
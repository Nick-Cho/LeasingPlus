import Account from "../models/user";
import {hashPassword} from '../helpers/auth'

export async function register(req,res){
  const {name, email, password, secretQuestion, secret } = req.body;
  //Registration validation
  if (!name) return res.status(400).send({message: "Name is required"});
  if (!password || password.length < 6){
    return res.status(400).send({message: "Must Enter a password with 6 or more characters"});
  }
  if (!secret) return res.status(400).send({message: "Answer to question required for account recovery"});
  const exist = await Account.findOne({"email": email});
  if (exist) return res.status(400).send({message: "Email already registered"});

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
    return res.status(400).json({
      ok: true,
    })
  } 
  catch(err){
    console.log("Register endpoint error: ", err);
    return res.status(400).send({message:"Error in register endpoint"})
  }
}

// export async function login(req,res){
//   try{

//   } catch (err){

//   }
// }
import Account from "../models/user";
import Chore from "../models/chores";
const mongoose = require("mongoose");

export async function addChore(req,res){
  const {chore, user_id} = req.body;
  const newChore = new Chore({
    user_id: user_id,
    name: chore,
    completed: false,
  });

  try{
     newChore.save()
     return res.status(200).send({
      success:true, message: "Chore Added!"
    })
  } catch (err) {
    console.log(err);
  }
}

export async function getChore(req,res){
  const {user_id} = req.params;
  
  try{
    let user = await Account.findOne({_id: sender_id}).select('-password -secret -secretQuestion -rentCollected -rentPaid -rent')
    
  } catch(err) {
    console.log(err);
  }
}
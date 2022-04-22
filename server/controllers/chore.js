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

export async function getChores(req,res){
  const {user_id} = req.params;
  try{
    let user = await Account.findOne({_id: user_id}).select('-password -secret -secretQuestion -rentCollected -rentPaid -rent')
    let roommates = [];
    for (let i=0; i<user.roommates.length; i++){
      let roommate = await Account.findOne({_id: user.roommates[i]}).select("-password -secret -roommates -secretQuestion -rentCollected -rentPaid -rent");
      let chores = await Chore.find({user_id: roommate._id});
      roommates.push({name: roommate.name, user_id: roommate._id,chores: chores});
    }
    let chores = await Chore.find({user_id: user_id});
    
    roommates.push({name: user.name, user_id: user._id, chores: chores});
    
    return res.send({roommates, success: true});
  } catch(err) {
    console.log(err);
  }
}

export async function updateChore(req,res){
  const {chore, new_user_id} = req.body;
  console.log(new_user_id)
  try{
    const newChore = await Chore.findByIdAndUpdate(chore._id,{user_id: new_user_id}, {new:true})
    console.log("new Chore: ", chore);
    return res.send({success:true})
  } catch (err) {
    console.log(err);
  }
}
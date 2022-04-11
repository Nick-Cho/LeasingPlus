import Account from "../models/user";
const mongoose = require("mongoose");

export async function inviteUser(req,res){
  const {sender_id, roomKey,rent,address} = req.body;
  // console.log("sender id: ", sender_id)
  try{
    const exist = await Account.find({"invites.address": address})
    if (exist == []) return res.send({success:false, message: "Invite with this address already sent"})
    const user = await Account.findByIdAndUpdate(req.params.id,{
      $addToSet: {invites: {
        sender_id: sender_id,
        key: roomKey,
        rent: rent,
        address: address,
      }}
    },{new:true,})
    .select("-password -secret -secretQuestion -roommates -rentCollected -rentPaid -rent")
    res.send({success:true,user, message: "Invite sent succesfully"});
  } catch(err){
    console.log(err);
  }
}

export async function getInvite(req,res) {
  // console.log(req.params)
  let {invite_id, sender_id} = req.params;
  try{
    let user = await Account.findOne({_id: sender_id}).select('-password -secret -secretQuestion -roommates -rentCollected -rentPaid -rent')
    // console.log(user.invites)
    invite_id = mongoose.Types.ObjectId(invite_id);
    const invite = user.invites.filter(invite=>{
      return (invite._id.equals(mongoose.Types.ObjectId(invite_id)))
    })
    // console.log("invite", invite);
    user = await Account.findOne({id:invite[0].sender_id}).select('-password -secret -secretQuestion -roommates -rentCollected -rentPaid -rent')
    
    return res.send({success:true, invite, user});
  } catch (err) {
    console.log(err);
  }
}

export async function denyInvite(req,res){
  try{
    const {invite_id} = req.params;
    const {user_id} = req.body;
    let user = await Account.findOne({id:user_id});
    user.invites.filter((invite)=>{
      return (!invite._id.equals(mongoose.Types.ObjectId(invite_id)));
    })
    console.log(user)
  } catch(err){
    console.log(err);
  }
}
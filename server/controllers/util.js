import Account from "../models/user";

export async function searchUser(req,res){
  const {query} = req.params;
    // Checking if query is given
    if (!query) return res.send({message:"no query"});
  try{
    const user = await Account.find({
      $or: [
        {"name": {$regex: query, $options: '/i'}},
        {"email": {$regex: query, $options: '/i'}}
    ]
    }).select('_id, name, email');
    res.send({success:true, user});

  } catch(err){
    console.log(err);
    res.send({success: false, message: "Error in search user function"})
  }
}
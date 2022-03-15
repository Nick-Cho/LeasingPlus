

export async function register(req,res){
  const {name, email, pswd, secret, secretQuestion} = req.body;
  try{
    
    return res.json({
      ok: true
    })
  } catch(err){
    console.log("Register endpoint error: ", err);
    return res.status(400).send()
  }
}

// export async function login(req,res){
//   try{

//   } catch (err){

//   }
// }
import {useState,useEffect} from 'react'

export default function ForgotPasswordForm({
  handleSubmit,
  email,
  setEmail,
  newPassword,
  setNewPassword,
  secret,
  setSecret,
  secretQuestion,
  setSecretQuestion
})
{
  const [showPswd, setShowPswd] = useState(false);
  const [confirmPswd, setConfirmPswd] = useState("");
  
  // useEffect(()=>{
  //   console.log(newPassword, email, secret, confirmPswd)
  // },[newPassword])
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row" >
          <div className="col text-center" >
            <h1 className= "text-light font"> Forgot Password</h1>
          </div>
        </div> 
        
        <div class="form-group p-2">
          <label className="text-muted form-text" >Email address</label>
          <input type="email" className="form-control bg-dark text-light font" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}}/>
          <small class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group px-2">
          <label className="text-muted form-text" >New Password</label>
          <input type= {showPswd ? "text": "password"} onChange={(e)=>{setNewPassword(e.target.value)}} class="form-control bg-dark text-light font" placeholder="Enter New Password"/>
          <label className="text-muted form-text">Confirm Password</label>
          <input type= {showPswd ? "text": "password"} onChange={(e)=>{setConfirmPswd(e.target.value)}} class="form-control bg-dark text-light font" placeholder="Confirm New Password"/>
        </div>
        
        <div class="form-group px-2">
          <input type="checkbox" class="form-check-input font" onClick ={()=>{setShowPswd(!showPswd)}}/>
          <label class="form-check-label text-light px-2" >Show Password</label>
          {
           (confirmPswd != "") && 
              (confirmPswd === newPassword) ? 
              <>
                <p className="text-success font"> Passwords match </p>
              </>
              :
              <>
                <p className="text-danger font"> Passwords don't match </p>
              </>           
          }
        </div>

        <>
          <div className = 'form group px-2'>
            <label className ='form-text text-muted'>
              Pick a question to use for password recovery
            </label>
            <select value = {secretQuestion} className = "form-control bg-dark text-light font" style = {{borderColor: "gray"}} onChange={(e)=>{setSecretQuestion(e.target.value)}}>
              <option>What is your favourite color?</option>
              <option>What is your first friend's name?</option>
              <option>What is your first pet's name?</option>
            </select>
          </div>

          <div className = 'form-group p-2'>
            <input type="text" placeholder= 'Enter Answer To Password Recovery Question' className = "form-control bg-dark text-light font" style = {{borderColor: "gray"}} onChange= {(e) => setSecret(e.target.value)}/>
          </div>
        </>
        <div className = "form-group p-2 text-center">
          <button 
          type="submit"
          className="login-button" 
          disabled = {(newPassword == "") || (confirmPswd == "") || (email == "") || (secret=="")}>Submit</button>
        </div>
        
      </form>
    </>
  )
}

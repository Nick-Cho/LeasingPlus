import {useState} from 'react'
import axios from 'axios';
function AuthForm({
  setShowLogin
}) 
{
  const [rightPanel, setRightPanel] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secret, setSecret] = useState("");
  const [secretQuestion, setSecretQuestion] = useState("What is your favourite color?");

  const handleSignUp = async(e) => {
    e.preventDefault();
    try{
      const {data} = axios.post(`${process.env.NEXT_PUBLIC_API}/register`, {
      name,
      email,
      password,
      secretQuestion,
      secret,
    });
    console.log("Return from register endpoint: ", data)
    setRightPanel(false); //setting authform form to sign in section after signing up
  } catch (err){
    console.log(err);
  }

  }

  const handleSignIn = async(e) =>{
    e.preventDefault();
  }
  return (
    <div className = "body">
      <div className={`login-container bg-dark ${rightPanel? "right-panel-active": ""}`}>
        <h3 onClick={()=>{setShowLogin(false)}} className = "text-light x" >x</h3>
        <div className="form-container sign-up-container bg-dark">
          
          <form action="#" className = "bg-dark login-form" onSubmit={handleSignUp}>
            
            <h1 className = "login-h1 text-light">Create Account</h1>
            <input type="text" className = "login-input text-light" placeholder="Name" value = {name} onChange={(e)=>{setName(e.target.value)}}/>
            <input type="email" className = "login-input text-light" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            <input type="password" className = "login-input text-light" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>     
            <label class="switch">
              <input type="checkbox"/>
              <span className="slider round"></span>
            </label>
            <select value = {secretQuestion} className = "form-control text-light bg-dark" style = {{borderColor:"gray", marginTop: "5px"}} onChange={(e)=>{setSecretQuestion(e.target.value)}}>
              <option >What is your favourite color?</option>
              <option >What is your first friend's name?</option>
              <option >What is your first pet's name?</option>
            </select>
            <small className = "text-muted form-text" style = {{fontSize: "12px"}}> Pick a question to use for password recovery</small>
            <input type="secret" className = "login-input text-light" value = {secret} onChange={(e)=>{setSecret(e.target.value)}} placeholder="Enter your answer" />
            
            <button className = "login-button" style = {{marginTop: "5px"}} >Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#" className = "bg-dark login-form" onSubmit = {handleSignIn}>
            <h1 className = "login-h1 text-light">Sign in</h1>
            <input type="email" className = "login-input text-light" placeholder="Email"  value = {email} onChange={(e)=>{setEmail(e.target.value)}}/>
            <input type="password" className = "login-input text-light" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            <a href="#" className = "nav-link">Forgot your password?</a>
            <button className = "login-button" >Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className = "login-h1">Already have an account?</h1>
              <p>Head to the sign in page with the button below</p>
              <button className="ghost login-button" id="signIn" onClick={()=>{setRightPanel(!rightPanel)}}>Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className = "login-h1">New to Leasing+?</h1>
              <p>Enter your details and make leasing easier</p>
              <button className="ghost login-button" id="signUp"  onClick={()=>{setRightPanel(!rightPanel)}}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthForm
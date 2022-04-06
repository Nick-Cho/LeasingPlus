import {useState, useContext,useEffect} from 'react'
import axios from 'axios';
import {toast} from "react-toastify";
import {UserContext} from '../../context/index'
import { useRouter } from 'next/router';
function AuthForm({setShowLogin}) {
  const [state, setState] = useContext(UserContext);
  const [rightPanel, setRightPanel] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secret, setSecret] = useState("");
  const [secretQuestion, setSecretQuestion] = useState("What is your favourite color?");
  const router = useRouter();
  const [landlord,setLandlord] = useState(false);

  useEffect(()=>{
    console.log(landlord);
  },[landlord])
  
  const handleSignUp = async (e) => {
    e.preventDefault();
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API}/register`, {
      name,
      email,
      password,
      secretQuestion,
      secret,
      landlord
    })
    // console.log("Return from register endpoint: ", response.data);
    if (response.data.success == true){
      toast.success('Succesfully Registered!')
      setRightPanel(false); //setting authform form to sign in section after signing up
      setPassword("");
      setName("");
      setEmail("");
      setSecret("");
      setLandlord(false);
    }
    else{
      toast.error(response.data.message);
    }
    
  }

  const handleSignIn = async(e) =>{
    e.preventDefault();
    const response = await axios.post(`/login`, {
      email,
      password,
    })
    if (response.data.success == true){
      toast.success(response.data.message);
      setState({
        user: response.data.user,
        token: response.data.token,
      })
      // console.log("State after calling login endpoint (from Authform component): ", state);
      window.localStorage.setItem('auth', JSON.stringify(state));
      setShowLogin(false);
      router.push("/user/dashboard")
    }
    else{
      toast.error(response.data.message);
    }
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
            
            <div className="check-container">
              <input type="checkbox"  checked={!landlord} onChange={()=>{setLandlord(false)}} style={{paddingRight:"1rem"}}/>    
              <label className="text-light px-2" >Tenant</label>     
              <input type="checkbox"  checked={landlord} onChange={()=>{setLandlord(true)}} style={{paddingRight:"1rem"}}/>    
              <label className="text-light px-2" >Landlord</label>    
            </div>
            
            <select value = {secretQuestion} className = "form-control text-light bg-dark" style = {{borderColor:"gray", marginTop: "5px"}} onChange={(e)=>{setSecretQuestion(e.target.value)}}>
              <option >What is your favourite color?</option>
              <option >What is your first friend's name?</option>
              <option >What is your first pet's name?</option>
            </select>

            <small className = "text-muted form-text" style = {{fontSize: "12px"}}> Pick a question to use for password recovery</small>
            <input type="secret" className = "login-input text-light" value = {secret} onChange={(e)=>{setSecret(e.target.value)}} placeholder="Enter your answer" />
            
            <button disabled={(email == "") || (password == "") || (secret == "") || (name == "")} className = "login-button" style = {{marginTop: "5px"}} >Sign Up</button>
          </form>
        </div>
        <div className="form-container bg-dark sign-in-container">
          <form action="#" className = "bg-dark login-form" onSubmit = {handleSignIn}>
            <h1 className = "login-h1 text-light">Sign in</h1>
            <input type="email" className = "login-input text-light" placeholder="Email"  value = {email} onChange={(e)=>{setEmail(e.target.value)}}/>
            <input type="password" className = "login-input text-light" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            <a href="/forgot-password" className = "nav-link">Forgot your password?</a>
            <button disabled={(email=="") || (password =="")} className = "login-button" >Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className = "login-h1 text-light">Already have an account?</h1>
              <p>Head to the sign in page with the button below</p>
              <button className="ghost login-button" id="signIn" onClick={()=>{setRightPanel(!rightPanel)}}>Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className = "login-h1 text-light">New to Leasing+?</h1>
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
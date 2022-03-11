import {useState} from 'react'

function AuthForm({setShowLogin}) {
  const [rightPanel, setRightPanel] = useState(false)
  return (
    <div className = "body">
      <div className={`login-container bg-dark ${rightPanel? "right-panel-active": ""}`}>
        <h3 onClick={()=>{setShowLogin(false)}} className = "text-light x" >x</h3>
        <div className="form-container sign-up-container bg-dark">
          
          <form action="#" className = "bg-dark login-form">
            
            <h1 className = "login-h1 text-light">Create Account</h1>
            <input type="text" className = "login-input text-light" placeholder="Name" />
            <input type="email" className = "login-input text-light" placeholder="Email" />
            <input type="password" className = "login-input text-light" placeholder="Password"/>     
            <select className = "form-control text-light bg-dark" style = {{borderColor:"gray", marginTop: "5px"}}>
              <option >What is your favourite color?</option>
              <option >What is your first friend's name?</option>
              <option >What is your first pet's name?</option>
            </select>
            <small className = "text-muted form-text" style = {{fontSize: "12px"}}> Pick a question to use for password recovery</small>
            <input type="secret" className = "login-input text-light" placeholder="Enter your answer" />
            <button className = "login-button" style = {{marginTop: "5px"}}>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#" className = "bg-dark login-form">
            <h1 className = "login-h1 text-light">Sign in</h1>
            <input type="email" className = "login-input text-light" placeholder="Email" />
            <input type="password" className = "login-input text-light" placeholder="Password" />
            <a href="#" className = "nav-link">Forgot your password?</a>
            <button className = "login-button">Sign In</button>
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
              <h1 className = "login-h1">Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost login-button" id="signUp"  onClick={()=>{setRightPanel(!rightPanel)}}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthForm
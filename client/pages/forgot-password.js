import {UserContext} from '../context/index.js';
import {useContext,useState} from "react";
import {useRouter} from "next/router";
function ForgotPassword() {
  const [state,setState] = useContext(UserContext);
  
  return (
    <div className = "container-fluid" style = {{minHeight: "100vh",backgroundColor: "black", overflow: "hidden"}}>
      <h1 className= "text-light"> forgot password page</h1>
      
    </div>
  )
}

export default ForgotPassword
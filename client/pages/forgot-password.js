import {UserContext} from '../context/index.js';
import {useContext,useState} from "react";
import {useRouter} from "next/router";
import ForgotPasswordForm from '../components/forms/ForgotPasswordForm.js';
import axios from 'axios';
import { responseSymbol } from 'next/dist/server/web/spec-compliant/fetch-event';
import { toast } from 'react-toastify';
function ForgotPassword() {
  const [state,setState] = useContext(UserContext);
  const [email,setEmail] = useState("");
  const [newPassword,setNewPassword] = useState("");
  const [secret, setSecret] = useState("")
  const [secretQuestion, setSecretQuestion] = useState("What is your favourite color?")
  const handleSubmit = async(e) => {
    e.preventDefault();
    const response = await axios.put(`/forgot-password`,{
      email, newPassword, secretQuestion, secret
    })
    if (response.data.success){
      toast.success(response.data.message);

    }
    else{
      toast.error(response.data.message);
    }
  } 
  return (
    <div className = "container-fluid" style = {{minHeight: "100vh",backgroundColor: "black",paddingTop: "4rem" }}>
      <div className = "row" >
        <div className = "col-md-6 offset-md-3">
          <ForgotPasswordForm 
          handleSubmit={handleSubmit} 
          email={email} 
          setEmail={setEmail} 
          newPassword={newPassword} 
          setNewPassword={setNewPassword} 
          secret={secret} 
          setSecret={setSecret}
          secretQuestion={secretQuestion}
          setSecretQuestion={setSecretQuestion}
          />
          
          
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword


import {UserContext} from '../context/index.js';
import {useContext,useState} from "react";
import {useRouter} from "next/router";
import ForgotPasswordForm from '../components/forms/ForgotPasswordForm.js';
function ForgotPassword() {
  const [state,setState] = useContext(UserContext);
  const [email,setEmail] = useState("");
  const [newPassword,setNewPassword] = useState("");
  const [secret, setSecret] = useState("")
  const [secretQuestion, setSecretQuestion] = useState("")
  const handleSubmit = async(e) => {
    console.log("handle submit")
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


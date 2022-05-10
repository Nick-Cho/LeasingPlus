import React,{useContext} from 'react'
import {UserContext} from '../context/index.js';
import axios from "axios";
import {useRouter} from "next/router"
function RentConfirmation() {
  const [state,setState] = useContext(UserContext);
  const router = useRouter();
  const handleSubmit = async(e)=> {
    e.preventDefault();
    const response = await axios.post('/stripe-account-onboard',{
      user: state.user
    });
    console.log(response);
    const newUser = await axios.get(`/get-user/${state.user._id}`)
    setState({user: newUser, token: state.token});
    console.log(state);
    // router.push(response.data.redirect)
  }
  return (
    <div style = {{backgroundColor: "black", minHeight: "100vh", paddingTop: "4rem"}} className = "container-fluid"> 
      <div className = "row">
        <div className= "offset-md-2 col-md-8 text-center">
          <form onSubmit={handleSubmit}  >
            <h2 className = "pt-5 text-light font display-4">Do you want to pay rent now?</h2>
            <h4 className = "text-light font display-6">Rent Due: ${state.user.room.rent}</h4>
            <h4 className = "text-light font display-6" >Address: {state.user.room.address}</h4>
            <button type = "submit" className = "btn btn-success">Proceed to Payment</button>
          </form>
        </div>  
      </div>
    </div>
  )
}

export default RentConfirmation
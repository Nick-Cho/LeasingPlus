import React,{useContext} from 'react'
import {UserContext} from '../context/index.js'

function RentConfirmation() {
  const [state] = useContext(UserContext)
  console.log(state)
  return (
    <div style = {{backgroundColor: "black", minHeight: "100vh", paddingTop: "4rem"}} className = "container-fluid"> 
      <div className = "row">
        <div className= "offset-md-2 col-md-8 text-center">
          <h2 className = "pt-5 text-light font display-4">Do you want to pay rent now?</h2>
          <h4 className = "text-light font display-6">Rent Due: ${state.user.room.rent}</h4>
          <h4 className = "text-light font display-6" >Address: {state.user.room.address}</h4>
          <button className = "btn btn-success ">Proceed to Payment</button>
        </div>  
      </div>
    </div>
  )
}

export default RentConfirmation
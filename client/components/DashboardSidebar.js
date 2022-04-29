import React, {useContext} from 'react'
import {UserContext} from '../context/index'
import Image from "next/image"
import { useRouter } from "next/router";
function DashboardSidebar({wallpaper, tenants, roommates, rentStatus}) {
  const [state,setState] = useContext(UserContext);
  const router = useRouter();
  return (
    <div className = "mt-4 pb-2 h-25" style = {{backgroundColor: "rgb(25,25,28)", borderRadius: "10px"}}>
        <Image src = {wallpaper} width={75} height={65} className = "px-3 pt-4" alt = "" />
        <h2 style={{display: "inline-block"}} className = "display-3 text-light text-center font">{state && state.user && state.user.name}</h2>
          
        {state && state.user && state.user.landlord ? 
          (
          <>
            <h2 className = "px-3 text-light font"> Tenants </h2>
            
            {tenants && tenants.map((tenant)=>{
              console.log(tenant)
            return(
              <div className = "px-3 pt-2 pb-2" style = {{borderTop: "1px solid rgba(70, 70, 70, 1)"}}>
                <h3 className = "font text-light">{tenant.name}</h3>
                <h5 className = "font text-light">Rent: ${tenant.room.rent}</h5>
                <h5 className = "font text-light" style= {{display: "inline"}}>Rent Status: </h5>
                <h5 
                  className = {`
                  ${(tenant.rentPaid && tenant.rentCollected)? "text-success": 
                  (tenant.rentPaid && !tenant.rentCollected)  ? "text-warning": 
                  "text-danger" }
                  `}
                  style={{display:"inline", fontWeight: "bold"}}>
                    {(tenant.rentPaid && tenant.rentCollected)? "Rent Paid": 
                    (tenant.rentPaid && !tenant.rentCollected)  ? "Rent Processing": 
                    "Rent Unpaid" }
                  </h5>
              </div>
              )
            })}
          </>)


          :


          (<>
            <div style = {{backgroundColor: "rgb(25,25,28)"}}>
              <h4 className = "px-3 text-light font">Monthly Rent: ${state && state.user && state.user.room && state.user.room.rent}</h4>
              <h4 className = "px-3 text-light font" style = {{display: "inline"}}>Rent Status: </h4>
              <h4 
                className = {`font 
                ${rentStatus === "Rent collected"? "text-success": 
                rentStatus === "Rent processing" ? "text-warning": 
                "text-danger" }
                `}
                style={{display:"inline", fontWeight: "bold"}}>
                {rentStatus}
              </h4>

              <h3 
                className = "px-3 text-light display-6 font" 
                style = {{paddingTop:"2rem"}}>
              Roommates
              </h3>
              {roommates && roommates.map((roommate)=>{
                return(
                  <div className = "px-3 py-2" style = {{borderTop: "1px solid rgba(70, 70, 70, 1)", backgroundColor: "rgb(25,25,28)"}}>

                    <h4 className = "font text-light" style= {{display: "inline"}}>Name: {roommate.name}</h4>
                    <h5 className= "font text-light">Email: {roommate.email}</h5>
                  </div>
                )}
              )}
            </div>
            <button 
              className = "btn btn-success mt-4" 
              style = {{
                marginLeft: "25%", 
                width: "50%",
              }}
              
              >
                Pay Rent
            </button>
          </>)   
        }
    </div>  
  )
}

export default DashboardSidebar
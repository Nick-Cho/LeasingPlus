import {useContext, useState,useEffect} from "react";
import {UserContext} from "../context/index.js";
import wallpaper from "../public/images/wallpaper.jpg"  
import Image from "next/image"
import { useRouter } from "next/router";
export default function Dashboard() {
  const [state,setState] = useContext(UserContext);
  const [rentStatus,setRentStatus] = useState("");
  // useEffect(()=>{setState({user:{"test": "asdf", "name": "Nick", "landlord": false}, token: "test"})}
  // ,[])
  const router = useRouter();
  useEffect(()=>{
    if (JSON.stringify(state.user) == "{}"){
      router.push("/")
    }
    if (state.user.rentCollected){
      setRentStatus("Rent collected");
    }
    else if (!state.user.rentCollected && state.user.rentPaid){
      setRentStatus("Rent processing");
    }
    else if (!state.user.rentPaid){
      setRentStatus("Rent unpaid");
    }
  }, [state.user.rentPaid || state.user.rentCollected])
  return (
    <div style = {{backgroundColor: "black", overflow: "hidden", height: "auto"}} className ="min-vh-100 container-fluid">
      <div className = "row">
        <div className = "col-md-4">
          <div style = {{display: "inline"}}>
            <Image src = {wallpaper} width={75} height={65} className ="px-3 pt-4" alt = "" style={{display: "inline"}}/>
            <h1 style={{display: "inline"}} className = "display-3 text-light text-center">{state.user.name}</h1>
          </div>
          
          {state.user.landlord ? 
            (<>

            </>)
            :
            (<>
              <h4 className = "px-3 text-light">Monthly Rent: ${state.user.rent}</h4>
              <h4 className = "px-3 text-light" style = {{display: "inline"}}>Rent Status: </h4>
              <h4 
              className = {`
              ${rentStatus === "Rent collected"? "text-success": 
              rentStatus === "Rent processing" ? "text-warning": 
              "text-danger" }
              `}
              style={{display:"inline"}}>
                {rentStatus}
              </h4>
            </>)
        }
        </div>
      </div>
    </div>
  )
}

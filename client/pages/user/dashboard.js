import {useContext, useState,useEffect} from "react";
import {UserContext} from "../../context/index.js";
import wallpaper from "../../public/images/wallpaper.jpg"  
import Image from "next/image"
import { useRouter } from "next/router";
import SearchTenants from "../../components/SearchTenants"
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
  }, [state && (state.user.rentPaid || state.user.rentCollected)])
  return (
    <div style = {{backgroundColor: "black", minHeight: "100vh", paddingTop: "4rem"}} className ="container-fluid">
      <div className = "row">
        <div className = "mt-4 col-md-4 pb-4" style = {{backgroundColor: "rgb(30,30,30)"}}>
          <div style={{}}>
            <Image src = {wallpaper} width={75} height={65} className ="px-3 pt-4" alt = "" />
            <h2 style={{display: "inline-block"}} className = "display-3 text-light text-center font">{state && state.user.name}</h2>
            
            
            {state.user.landlord ? 
              (<>
                <h3 className = "px-3 text-light font"> Tenants </h3>
                
                {state.user.tenants.map((tenant)=>{
                  console.log(tenant)
                })}
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
        
        <div className = 'offset-md-1 col-md-7'>
          <SearchTenants/>  
        </div>
      </div>
    </div>
  )
}

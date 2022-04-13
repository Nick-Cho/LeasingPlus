import {useContext, useState,useEffect} from "react";
import {UserContext} from "../../context/index.js";
import wallpaper from "../../public/images/wallpaper.jpg"  
import Image from "next/image"
import { useRouter } from "next/router";
import SearchTenants from "../../components/SearchTenants"
import axios from "axios";
export default function Dashboard() {
  const [state,setState] = useContext(UserContext);
  const [rentStatus,setRentStatus] = useState("");
  const [tenants,setTenants] = useState([]);
  const [roommates,setRoommates] = useState([]);
  const router = useRouter();

  const getRoommates = async() => {
    
  }

  const getTenants = async() => {
    state.user.tenants.map((tenant)=>{
      axios.get(`/get-user/${tenant}`)
      .then(response=> tenants.push(response.data.user))      
    })
    
  }


  useEffect(()=>{
    // console.log("state from dashboard: ", state.user)
    if (state.user == undefined || JSON.stringify(state.user) == "{}"){
      router.push("/")
    }
    if (state && state.user && state.user.rentCollected){
      setRentStatus("Rent collected");
    }
    else if (state && state.user &&!state.user.rentCollected && state.user.rentPaid){
      setRentStatus("Rent processing");
    }
    else if (state && state.user &&!state.user.rentPaid){
      setRentStatus("Rent unpaid");
    }
  }, [state && state.user && (state.user.rentPaid || state.user.rentCollected)])
  
  useEffect(()=>{
    // getRoommates();
    
    getTenants();
  },[])
  
  return (
      <div style = {{backgroundColor: "black", minHeight: "100vh", paddingTop: "4rem"}} className ="container-fluid">
      <div className = "row">
        <div className = "mt-4 col-md-4 pb-2 h-25" style = {{backgroundColor: "rgb(30,30,30)"}}>
            <Image src = {wallpaper} width={75} height={65} className ="px-3 pt-4" alt = "" />
            <h2 style={{display: "inline-block"}} className = "display-3 text-light text-center font">{state && state.user && state.user.name}</h2>
             
            {state && state.user && state.user.landlord ? 
              (<>
                <h3 className = "px-3 text-light font"> Tenants </h3>
                
              </>)
              :
              (<>
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
              </>)   
            }
        </div>  
        
        {state && state.user && state.user.landlord &&
          <div className = 'col-md-7 offset-md-1 '>
            <SearchTenants/>  
          </div>
        }      
      </div>
    </div>
  )
}

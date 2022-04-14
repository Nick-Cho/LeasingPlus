import {useContext, useState,useEffect, useRef} from "react";
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

  const getTenants = () => {    
    if (tenants.length == state.user.tenants.length){
      return  ;
    }
    state && state.user && state.user.tenants && state.user.tenants.map((tenant)=>{
      axios.get(`/get-user/${tenant}`)
      .then((response)=> {tenants.push(response.data.user); setTenants([...tenants])});
    })
    // console.log("Logging tenants", tenants)
  }


  useEffect(()=>{
    if (state.user == undefined || JSON.stringify(state.user) == "{}"){
      router.push("/")
    }
    if (state && state.user && state.user.rentCollected){
      setRentStatus("Rent collected");
    }
    else if (state && state.user && !state.user.rentCollected && state.user.rentPaid){
      setRentStatus("Rent processing");
    }
    else if (state && state.user && !state.user.rentPaid){
      setRentStatus("Rent unpaid");
    }
  }, [state && state.user && (state.user.rentPaid || state.user.rentCollected)])
  
  useEffect(()=>{
    // getRoommates();
    getTenants();
  },[])
  
  // useEffect(()=>{
  //   console.log(tenants)
  // },[tenants])
  return (
      <div style = {{backgroundColor: "black", minHeight: "100vh", paddingTop: "4rem"}} className ="container-fluid">
      <div className = "row">
        <div className = "mt-4 col-md-4 pb-2 h-25" style = {{backgroundColor: "rgb(30,30,30)"}}>
            <Image src = {wallpaper} width={75} height={65} className ="px-3 pt-4" alt = "" />
            <h2 style={{display: "inline-block"}} className = "display-3 text-light text-center font">{state && state.user && state.user.name}</h2>
             
            {state && state.user && state.user.landlord ? 
              (
              <>
                <h2 className = "px-3 text-light font"> Tenants </h2>
                
                {tenants && tenants.map((tenant)=>{
                return(
                  <div className = "px-3 pt-2 pb-2" style = {{borderTop: "1px solid rgba(70, 70, 70, 1)"}}>
                    <h3 className = "font text-light">{tenant.name}</h3>
                    <h5 className = "font text-light">Rent: {tenant.room.rent}</h5>
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

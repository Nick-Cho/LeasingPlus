import {useContext, useState,useEffect} from "react";
import {UserContext} from "../../context/index.js";
import axios from "axios";
import wallpaper from "../../public/images/wallpaper.jpg"  
import { useRouter } from "next/router";

import SearchTenants from "../../components/SearchTenants"
import DashboardSidebar from '../../components/DashboardSidebar'
import Chores from '../../components/cards/ChoresList'
export default function Dashboard() {
  const [state,setState] = useContext(UserContext);
  const [rentStatus,setRentStatus] = useState("");
  const [tenants,setTenants] = useState([]);
  const [roommates,setRoommates] = useState([]);
  const [stop,setStop] = useState(false);
  const router = useRouter();
  
  const getRoommates = async() => {
    if (roommates.length >= state && state.user && state.user.roomates && state.user.roommates.length){
      return;
    }
    else{ 
      state && state.user && state.user.roommates && state.user.roommates.map((roommate)=>{
      axios.get(`/get-user/${roommate}`)
      .then((response)=> {roommates.push(response.data.user); setRoommates([...roommates])})
    })
    }
    
  }

  const getTenants = () => {    
    // console.log(tenants.length >= state.user.tenants.length)
    if (tenants.length >= state && state.user && state.user.tenants && state.user.tenants.length){
      return;
    }
    else{
      state && state.user && state.user.tenants && state.user.tenants.map((tenant)=>{
      axios.get(`/get-user/${tenant}`)
      .then((response)=> {tenants.push(response.data.user); setTenants([...tenants])});
    })
    }
    
    // console.log("Logging tenants", tenants)
  }


  useEffect(()=>{
    console.log(state)
    if (!state && !state.user){
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
    if (!stop){
      getRoommates();
      getTenants();
      setStop(true);
    }
    
  },[])
  
  return (
    <div style = {{backgroundColor: "black", minHeight: "100vh", paddingTop: "4rem"}} className ="container-fluid">
      <div className = "row">
        <DashboardSidebar wallpaper={wallpaper} tenants={tenants} roommates={roommates} rentStatus={rentStatus}/>
        {state && state.user && state.user.landlord &&
          <div className = 'col-md-7 offset-md-1 '>
            <SearchTenants/>  
          </div>
        } 
        {state && state.user && !state.user.landlord && 
          <div className = 'mt-4 col-md-7 offset-md-1' style = {{backgroundColor: "rgb(20,20,23)", borderRadius: "15px"}}>
            <h4 className="text-light text-center display-4 font">Chores</h4>
            <Chores/>
          </div>
        }     
      </div>
    </div>
  )
}

import {useState, useContext, useEffect} from 'react'
import {UserContext} from '../../../context/index'
import axios from 'axios';
import {useRouter} from "next/router";
function ViewInvite() {
  const [invite, setInvite]= useState();
  const router = useRouter();
  const [state,setState] = useContext(UserContext);
  const [landlord, setLandlord] = useState();
  const getInvite = async (e) => {
    // console.log(state);
    const response = await axios.get(`get-invite/${router.query.invite}/${state.user._id}`);
    setInvite(response.data.invite);
    setLandlord(response.data.user.name);
  }

  useEffect(()=>{
    getInvite()
  },[])

  return (
    <div style = {{backgroundColor: "black", paddingTop:"4rem", minHeight: "100vh"}}> 
      <div className= "offset-md-3 col-md-6 mt-4 pb-4" style = {{backgroundColor: "rgb(30,30,30)"}}>
        <h1 className = "text-light text-center display-3">Invite Details</h1>
        <h1 className = "text-light text-center display-6">Landlord: {landlord}</h1>
        <h1 className = "text-light text-center display-6">Address: {invite[0].address} </h1>
        <h1 className = "text-light text-center display-6">Rent: ${invite[0].rent} </h1>
        <div className = "row container-fluid">
          <div className = "offset-sm-3 col-sm-6 ">
            <button className = "text-light btn btn-lg btn-danger font float-start" style= {{borderRadius: "10px", width: "8rem"}}>Deny</button>
            <button className = "text-light btn btn-lg btn-success font float-end" style= {{borderRadius: "10px", width: "8rem"}}>Accept</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewInvite
import {useState, useContext, useEffect} from 'react'
import {UserContext} from '../../../context/index'
import axios from 'axios';
import {useRouter} from "next/router";
import {toast} from "react-toastify"
function ViewInvite() {
  const [invite, setInvite]= useState();
  const router = useRouter();
  const [state,setState] = useContext(UserContext);
  const [landlord, setLandlord] = useState();

  const handleDeny = async (e) => {
    const response = await axios.put(`/deny-invite`, {
      user: state.user,
      invite_id: invite[0]._id,
    });
    
    if (response.data.success){
      toast.error("Invite Denied");
      getInvite();
    }
  }

  const handleAccept = async (e) => {
    
  }

  const getInvite = async (e) => {
    // console.log(state);
    const response = await axios.get(`get-invite/${router.query.invite}/${state.user._id}`);
    setInvite(response.data.invite);
    setLandlord(response.data.user.name);
    console.log(invite)
  }

  useEffect(()=>{
    getInvite();
  },[])

  return (
    <div style = {{backgroundColor: "black", paddingTop:"4rem", minHeight: "100vh"}}> 
      <div className= "offset-md-3 col-md-6 mt-4 pb-4 pt-3" style = {{backgroundColor: "rgb(30,30,30)"}}>
        <h1 className = "text-light text-center display-3 font">Invite Details</h1>
        {invite && 
          <>
            <h1 className = "text-light text-center display-6">Landlord: {landlord}</h1>
            <h1 className = "text-light text-center display-6">Address: {invite[0].address} </h1>
            <h1 className = "text-light text-center display-6">Rent: ${invite[0].rent} </h1>
          </>
        }
        <div className = "row container-fluid">
          <div className = "offset-sm-3 col-sm-6 ">
            <button onClick = {handleDeny} className = "text-light btn btn-lg btn-danger font float-start" style= {{borderRadius: "10px", width: "8rem"}}>Deny</button>
            <button onClick = {handleAccept} className = "text-light btn btn-lg btn-success font float-end" style= {{borderRadius: "10px", width: "8rem"}}>Accept</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewInvite
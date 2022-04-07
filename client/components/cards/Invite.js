import {useEffect} from 'react'
import axios from 'axios'
function Invite({invite,sender,setSender}) {
  const getUser = async() => {
    const response = await axios.get(`/get-user/${invite.sender_id}`);
    //console.log("Get user response: ", response)
    setSender(response.data.user)
    // console.log("Sender: ", sender);
  }

  useEffect(()=>{
    getUser();
  },[])

  return (
    <div className = "d-flex justify-content-between px-3">
      <h5 className = "col-sm-4 text-light font">{sender.name}</h5>
    </div>
  )
}

export default Invite
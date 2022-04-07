import {useEffect, useState} from 'react'
import axios from 'axios'
function Invite({invite}) {
  const [sender, setSender] = useState();
  const getUser = async() => {
    try{ 
      // console.log(invite);
      const response = await axios.get(`/get-user/${invite.sender_id}`);
      console.log("Get user response: ", response)
      setSender(response.data.user)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(()=>{
    getUser();
  },[])

  return (
    <div className = "d-flex justify-content-between px-4 font">
      { JSON.stringify(sender) !== '{}'  &&
        <>
          <h4 className = "text-light"> {sender.name}</h4>
          <span className="btn btn-success"> View </span>
        </>
      }
      
    </div>
  )
}

export default Invite
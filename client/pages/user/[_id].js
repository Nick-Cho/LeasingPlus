import axios from 'axios';
import {useRouter} from "next/router";
import {useContext,useState, useEffect} from "react";
import {UserContext} from "../../context/index"
import {Avatar} from "antd";
import InviteForm from '../../components/forms/InviteForm'

function Invite() {
  const [state, setState] = useContext(UserContext);
  const [user, setUser] = useState({});
  const [address,setAddress] = useState("");
  const [key, setKey] = useState("");
  const [rent, setRent] = useState("");
  const router = useRouter();

  const handleSubmit = () => {
    console.log("handle submit")
  }
  const fetchUser = async()=> {
    try{
      const response = await axios.get(`/user/${router.query._id}`)
      setUser(response.data.user)
      // console.log("Response from fetch user:", user);
    } catch(err){
      console.log(err);
    }
  }
  useEffect(()=>{
    fetchUser()
  },[router.query._id])
  
  return (
    <div className = "container-fluid" style={{backgroundColor: "black", minHeight: "100vh", paddingTop:"4rem"}}>
      <div className = "row">
        <div className = "col">\
          <div className = "text-center">
            <h1 className ="display-3 text-light">{`Invite ${user.name} to your Lease?`}</h1>
            <h4 className = "display-6 text-light">{user.name}</h4>
            <h3 className = "font text-light">{user.email}</h3>
          </div>  
          <InviteForm
            address = {address}
            setAddress = {setAddress}
            key = {key}
            setKey={setKey}
            rent={rent}
            setRent={setRent}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>   
    </div>
  )
}

export default Invite
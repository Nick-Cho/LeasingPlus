import React,{useState, useEffect} from 'react'
import axios from "axios"
function Chore({completed,name, _id}) {
  const [check, setCheck] = useState();
  
  const updateCheck = async() => {
    const response = await axios.put("/check-chore",{chore_id: _id});
    setCheck(!check); 
  }
  useEffect(()=>{
    setCheck(completed);
  },[])
  return (
    <div>
      <h5 className = "text-light" style = {{display:"inline"}}>{name}</h5>
      <input style={{ marginLeft: "1.5rem"}} checked={check} onChange = {updateCheck}type= "checkbox"/>
      <h5 className = "text-danger font" style = {{cursor: "pointer",marginLeft: "1.5rem", display:"inline"}}>X</h5>
    </div>
  )
}

export default Chore
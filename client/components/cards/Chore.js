import React,{useState, useEffect} from 'react'
import axios from "axios"
import {EditOutlined} from "@ant-design/icons"
function Chore({completed, name, _id}) {
  const [check, setCheck] = useState();
  const [showChore,setShowChore] = useState(false);

  const updateCheck = async() => {
    const response = await axios.put("/check-chore",{chore_id: _id});
    setCheck(!check); 
  }

  const deleteChore = async() => {
    const response = await axios.delete(`/delete-chore/${_id}`);
    console.log(response)
    setShowChore(true);
  }

  useEffect(()=>{
    setCheck(completed);
  },[])
  return (
    
    <div hidden={showChore}>
      <h5 className = "text-light" style = {{display:"inline"}}>{name}</h5>
      <input style={{ marginLeft: "1rem"}} checked={check} onChange = {updateCheck}type= "checkbox"/>
      {/* <EditOutlined className = "text-light"/> */}
      <h5 className = "text-danger font" onClick={deleteChore} style = {{cursor: "pointer", marginLeft: "1rem", display:"inline"}}>X</h5>
    </div>
    
  )
}

export default Chore
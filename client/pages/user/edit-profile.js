import React from 'react'
import {Avatar} from "antd"
import {CameraOutlined} from "@ant-design/icons"
import axios from 'axios';
function EditProfile() {
  const handleImage = async (e) =>{
    const file = e.target.files[0];
    let formData = new FormData();
    formData.append("image", file);
    // console.log([...formData]);
    try{
      const response = await axios.post("/upload-image", formData)
      console.log("Return from upload image backend endpoint: ", response)
    } catch(err){
      console.log(err)
    }
  }
  return (
    <div>
      <h1>test</h1>
      <label style={{cursor: "pointer"}}>
        <CameraOutlined /> 
        <input onChange={handleImage} type="file" accept="images/*" hidden/>
      </label>
    </div>
  )
}

export default EditProfile
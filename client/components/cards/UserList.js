import React from 'react'

export default function UserList({tenants}) {
  return (
    <div className = "bg-dark mt-3" >
 
      {tenants.map((tenant)=>{
        return(
        <div className = "row py-2 px-3" style = {{backgroundColor: "rgb(30,30,30)"}} key = {tenant._id}>
          <div style= {{display:"inline-flex", }}>
            <h4 className="col-sm-4 text-light font">{tenant.name}</h4>
          
            <button className="offset-sm-5 col-sm-3 btn btn-success">Invite</button>
          </div>
        </div>
      )})}

    </div>
  )
}

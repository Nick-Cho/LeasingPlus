import React from 'react'

function InviteForm({address,setAddress, key, setKey, rent, setRent, handleSubmit}) {
  return (
    <form onSubmit={handleSubmit} className = "offset-3 col-6">
      <div className = "form-group p-2">
        <label className="text-muted form-text">Address</label>
        <input type = "text" 
        className="form-control bg-dark text-light font" 
        placeHolder= "Enter Address of your lease"
        onChange={(e)=>{setAddress(e.target.value)}}
        />
      </div>

      <div className = "form-group p-2">
        <label className="text-muted form-text">Rent</label>
        <input type ="text"
        className="form-control bg-dark text-light font"
        placeHolder= "Specify rent for your new tenant"
        onChange={(e)=>{setRent(e.target.value)}}
        />
      </div>

      <div className = "form-group p-2">
        <label className = "text-muted form-text">Room Key</label>
        <input type = "text" 
        className="form-control bg-dark text-light font"
        placeHolder="Which room will you assign your tenant to?"
        onChange={(e)=>setKey(e.target.value)}
        />
      </div>
      <div className = "form-group p-3 text-center">
          <button 
          type="submit"
          className="login-button" 
          disabled = {!address || !rent}
          >Submit</button>
        </div>
    </form>
  )
}

export default InviteForm
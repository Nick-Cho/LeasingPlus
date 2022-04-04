import {useEffect} from 'react'

function InviteForm({address,setAddress, key, setKey, rent, setRent, handleSubmit}) {
  useEffect(()=>{
    console.log(rent)
  },[rent])
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
      <label className="p-2 text-muted form-text">Rent</label>
      <div className = "form-group p-2 d-flex">
        <span className = "d-flex font text-light p-2" style={{position:"absolute"}}>
          $
        </span>
        <input 
          type ="number"
          className="px-3 form-control bg-dark text-light font"
          onChange={(e)=>{setRent(e.target.value)}}
        />
      </div>

      <div className = "form-group p-2 input-icon">
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
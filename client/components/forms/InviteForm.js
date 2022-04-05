import {useEffect} from 'react'

function InviteForm({address,setAddress, key, setRoomKey, rent, setRent, handleSubmit}) {
  // useEffect(()=>{
  //   console.log(rent)
  // },[rent])

  return (
    <form onSubmit={handleSubmit} className = "offset-3 col-6">
      <div className = "form-group p-2">
        <label className="text-light form-text">Address</label>
        <input type = "text" 
        className="form-control bg-dark text-light font" 
        placeHolder= "Enter Address of your lease"
        onChange={(e)=>{setAddress(e.target.value)}}
        />
      </div>
      
      <label className="p-2 text-light form-text">Monthly Rent</label>
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

      <div className = "form-group p-2">
        <label className="text-light form-text">Room Key (Optional)</label>
        <input type = "number" 
        className="form-control bg-dark text-light font" 
        placeHolder= "Enter Room Key Pin"
        onChange={(e)=>{setRoomKey(e.target.value)}}
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
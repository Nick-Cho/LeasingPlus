import React from 'react'

function ChoreForm({handleAddChore,chore,setChore}) {
  
  return (
    <form onSubmit={handleAddChore}>
      <div className = "form-group row">
        <div className = "offset-md-2 col-md-6 offset-sm-1 col-sm-6">
          <input 
          type="text" 
          className = "form-control"
          onChange={(e)=>{setChore(e.target.value)}}
          value = {chore}
          />
        </div>
        <div className = "col-md-4 col-sm-4">
          <button className=" btn btn-success" type = "submit" >Add Chore</button>
        </div>
      </div>
    </form>
  )
}

export default ChoreForm
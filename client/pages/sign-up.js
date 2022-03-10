
function Signup() {
  return (
    <form style = {{backgroundColor: "black"}}>
      <div className = "form-group p-2">
        <div className = "row">
          <div className = "col-sm-12">
            <small>
              <label className = "text-light">Name</label>
            </small>
            <input type = "text" style ={{borderColor:"gray"}} className ="form-control"/>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Signup
import {useState} from 'react'

export default function SearchTenants() {
  const [query, setQuery] = useState("");
  const searchUser = (e) => {
    e.preventDefault();
    try{

    } catch(err){
      console.log(err);
    }
  }
  
  return (

    <div className = "row mt-4">
      <div className = "col-md-8">
        <form onSubmit={searchUser}>
          <div class="form-group">
            <input 
            type="email" 
            value = {query} 
            onChange = {(e)=>{setQuery(e.target.value)}} 
            className = "bg-dark text-light form-control" 
            placeholder="Search for tenants"
            style = {{border: "0.2px solid white", borderRadius: "5px"}}
            />
          </div>
        </form>
      </div>
      <div className = "col-md-4 container-fluid">
        <button className="btn btn-outline-primary col-12">Submit</button>
      </div>
    </div>
  )
}

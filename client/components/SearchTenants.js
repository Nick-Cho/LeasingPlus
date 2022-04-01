import {useState} from 'react'
import axios from 'axios';
export default function SearchTenants() {
  const [query, setQuery] = useState("");
  const searchUser = async (e) => {
    e.preventDefault();
    try{
      const response = await axios.get(`/search-user/${query}`) 
      console.log(response);
      if (response.data.success == true){
        // console.log(response.data.user)
      }
    } catch(err){
      console.log(err);
    }
  }
  
  return (

    <div className = "mt-4">
      <form onSubmit={searchUser}>
        <div className=" row form-group">
          <div className = "col-md-8">
            <input 
            type="text" 
            value = {query} 
            onChange = {(e)=>{setQuery(e.target.value)}} 
            className = "bg-dark text-light form-control" 
            placeholder="Search for tenants to add to your lease"
            style = {{border: "0.2px solid white", borderRadius: "5px"}}
            />
          </div>
          <div className = "container-fluid col-md-4">
            <button type="submit" className="btn btn-outline-success col-12">Search</button>
          </div>
        </div>
      </form>
    </div>
  )
}

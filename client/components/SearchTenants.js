import {useState,useContext} from 'react'
import axios from 'axios';
import {UserContext} from '../context/index'
import UserList from './cards/UserList'
export default function SearchTenants() {
  const [state, setState] = useContext(UserContext);
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
  const searchUser = async (e) => {
    e.preventDefault();
    try{
      const response = await axios.get(`/search-user/${query}`) 
      if (response.data.success == true){
        setResult(response.data.user);
        console.log(result);
      }
    } catch(err){
      console.log(err);
    }
  }
  
  return (

    <div className = "mt-4" >
      <form onSubmit={searchUser}>
        <div className=" row form-group">
          <div className = "col-md-8">
            <input 
            type="text" 
            value = {query} 
            onChange = {(e)=>{setQuery(e.target.value); e.target.value == "" ? setResult([]): ""}} 
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
      <div className = "">
        
        {result.length !== 0 &&
        <UserList tenants = {result}/>      
        }
      </div>
      
    </div>
  )
}

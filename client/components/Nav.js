import Link from "next/link"
import { useRouter } from "next/router";
import {useContext, useEffect} from "react";
import {UserContext} from "../context/index"
function Nav({setShowLogin}) {
  const [state, setState] = useContext(UserContext);
  const router = useRouter(); 

  const logout = () =>{
    //console.log("executing logout")
    window.localStorage.removeItem("auth");
    setState({user: {}, token: ""});
    router.push("/");
  }
  //For Testing
  useEffect(()=>{console.log(state.user)}
  ,[])

  return (
    <nav style= {{position: "absolute"}} className="container-fluid navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand text-light" href = "/">Leasing+</a>

        {(!state || JSON.stringify(state.user) === "{}") && 
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <a 
            className="nav-item nav-link text-light" 
            style = {{cursor:"pointer"}} 
            onClick={()=>{setShowLogin(true)}}>
              Login
            </a>
            <a 
            className=" nav-item nav-link text-light" 
            style = {{cursor:"pointer"}} 
            onClick={()=>{setShowLogin(true)}}>
            Signup
            </a>
            
            <Link className="nav-item" href="/features">
              <a className="nav-link text-light" >Features</a>
            </Link>
          </ul>
        </div>}


        {(state && JSON.stringify(state.user) !== "{}" ) &&
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className = "nav-item">
                <Link className = "nav-item" href ="/user/dashboard">
                  <a className = "nav-link text-light">Dashboard</a>
                </Link>
              </li>
              
              {state.user.landlord || 
                <li className = "nav-item">
                  <a className = "nav-link text-light">
                    Invites
                  </a>
                </li>
              }
              <li className = "nav-item">
                <a className = "nav-link text-light" style = {{cursor: "pointer"}} onClick = {logout}>
                  Logout
                </a>
              </li>

              
              <li className = "nav-item">
                <img/>
              </li>
            </ul>
          </div>
        }
      </div>

    </nav>
  )
}

export default Nav
import {useContext, useEffect} from "react";
import {UserContext} from "../context/index.js";
import {wallpaper} from "../public/images/wallpaper.jpg"
export default function Dashboard() {
  const [state,setState] = useContext(UserContext);
  // useEffect(()=>{setState({user:{"test": "asdf", "name": "Nick", "landlord": false}, token: "test"})}
  // ,[])
  return (
    <div style = {{backgroundColor: "black", overflow: "hidden", height: "auto"}} className ="min-vh-100 container-fluid">
      <div className = "row">
        <div className = "col-md-3">
          <div style = {{display: "inline"}}>
            <img src = {wallpaper}/>
            <h2 className = "text-light text-center">{state.user.name}</h2>
          </div>
          
          {state.user.landlord ? 
            (<>

            </>)
            :
            (<>
              <h4 className = "text-light">Rent due</h4>
            </>)
        }
        </div>
      </div>
    </div>
  )
}

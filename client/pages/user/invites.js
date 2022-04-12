import {useEffect, useContext,useState} from 'react'
import {UserContext} from '../../context/index.js'
import {useRouter} from "next/router";
import InvitesList from '../../components/cards/InvitesList'
function Invites() {
  const [state, setState] = useContext(UserContext);
  const [invites, setInvites] = useState([]);
  const router = useRouter();

  useEffect(()=>{
    if (JSON.stringify(state.user) == "{}"){
      router.push("/")
    }
    setInvites(state.user.invites);
  },[])

  return (
    <div className = "container-fluid" style = {{paddingTop: "4rem", backgroundColor: "black", minHeight: "100vh"}}>
      <div className = "row">
        <div className = "offset-md-2 col-md-8">
          {state.user && state.user.invites && state.user.invites.length == 0 ?
            <h1 className = "display-3 text-center text-light header">No Invites</h1>
            :
            (
              <>
                <h1 className = "display-3 text-center text-light header">Invites</h1>
                <InvitesList invites={invites}/>
              </>
            )
          }
          
        </div>
      </div>
    </div>
  )
}

export default Invites
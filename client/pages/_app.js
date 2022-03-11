import "bootstrap/dist/css/bootstrap.min.css"
import {useState} from "react"
import Nav from '../components/Nav'
import Login from '../components/forms/AuthForm'
import './styles.css'
function MyApp({ Component, pageProps }) {
  const [showLogin, setShowLogin] = useState(false)
  return( 
    <div >
      <Nav showLogin={showLogin} setShowLogin={setShowLogin}/>
      {showLogin &&
      <Login showLogin={showLogin}/>
      }
      
      <Component {...pageProps} />
    </div>
  )
}


export default MyApp
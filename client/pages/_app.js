import "bootstrap/dist/css/bootstrap.min.css"
import {useState} from "react"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {UserProvider} from "../context/index.js";
import "antd/dist/antd.css"

import Nav from '../components/Nav'
import Login from '../components/forms/AuthForm'
import '../public/styles/styles.css'

import Chores from '../components/cards/Chores'
function MyApp({ Component, pageProps }) {
  const [showLogin, setShowLogin] = useState(false)
  return( 
    <UserProvider >
      {/* <div style ={{filter: showLogin ? "blur(4px)" : ""}}>
        <Nav setShowLogin={setShowLogin}/>
      </div>
      
      {showLogin &&
      <div>
        <Login setShowLogin={setShowLogin}/>
      </div>
      }
      <ToastContainer/>
      <div style ={{filter: showLogin ? "blur(4px)" : ""}}>
        <Component {...pageProps} />
      </div> */}
      <Chores/>
    </UserProvider>
  )
}


export default MyApp
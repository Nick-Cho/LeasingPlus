import {useState, createContext, useEffect} from "react"
import axios from "axios";
import { useRouter } from "next/router";

const UserContext = createContext();

const UserProvider = ({children}) => {
  const [state, setState] = useState({
    user: {},
    token: "",
  });

  //attempting to get authentication key from local storage on startup
  useEffect(() => {
    setState(JSON.parse(window.localStorage.getItem('auth')));
  }, []);

  const token = state && state.token ? state.token : " ";

  axios.defaults.headers.common["Authorization"] =  `Bearer ${token}`;
  axios.defaults.baseURL = process.env.NEXT_PUBLIC_API;
 

  return(
    <>    
      <UserContext.Provider value = {[state, setState]}>
        {children}
      </UserContext.Provider>
    </>
  );
};

export {UserContext, UserProvider};
import axios from 'axios'
import React,{useEffect,useContext} from 'react'
import {UserContext} from "../../../context/index.js"

function stripeReturn() {
  const [state,setState] = useContext(UserContext);
  useEffect(()=>{
    console.log("state:" ,state);
    const account = axios.get(`https://api.stripe.com/v1/accounts/${state.stripe_id}`)
    console.log(account);
  })
  return (
    <div>stripe-return</div>
  )
}

export default stripeReturn
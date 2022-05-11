import axios from 'axios'
const stripe = require('stripe')('sk_test_51KstQhBKEerwsYTQkaycKBjNOWfjOet6p9hUvFqfQ6QFp7t24Yj4xTsB4Rr4XXRntFRLh6SSxiymP6drNuWcaqq8003WXwUjEY');
import React,{useEffect,useContext, useState} from 'react'
import {UserContext} from "../../../context/index.js"

function stripeReturn() {
  const [state,setState] = useContext(UserContext);
  const [account,setAccount] = useState();

  useEffect(()=>{
    axios.get(`/get-stripe-account/${state.user._id}`).then((response)=>{
      setAccount(response.data.stripe_account)
    })

    
  })
  return (
    <div className = "pt-5">
      Onboarding failed: try again?
    </div>
  )
}

export default stripeReturn
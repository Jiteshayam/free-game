import React from 'react'
import Template from '../components/Template'
import signup from '../assets/signup.jpg'

const Signup = ({setIsLogedin}) => {
  return (
    <Template 
    title="Join to enjoy"
    desc1="Start your new journey at " 
    desc2=""
    image={signup}
    setIsLoggedIn={setIsLogedin}
    formtype="signup"/>
  )
}

export default Signup
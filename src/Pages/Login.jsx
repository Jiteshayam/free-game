import React from 'react'
import Template from '../components/Template'
import loginImg  from '../assets/login.jpg'

const Login = ({setIsLogedin}) => {
  return (
    <Template 
    title="Welcome Back"
    desc1="Find all the amazing games available in "
    desc2="Stay loged In to save bookmarks."
    image={loginImg}
    setIsLoggedIn={setIsLogedin}
    formtype="login"/>
  )
}

export default Login
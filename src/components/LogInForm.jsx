import React, { useState } from 'react'
import { BrowserRouter,Link,Routes,Route, useNavigate } from 'react-router-dom'
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import { toast } from 'react-hot-toast'
import Login from '../Pages/Login'

const LogInForm = ({setIsLoggedIn}) => {
  const navigate = useNavigate()
  const [formData, setformData] = useState({
    email:"",
    password:""
  })

  const [showPassword, setShowPassword] = useState(false)

  function chaangeHandler(e){
    setformData((prevdata)=>(
      {
        ...prevdata,
        [e.target.name]:e.target.value
      }
    ))
  }

  function submitHandler(e){
    e.preventDefault();
    setIsLoggedIn(true)
    toast.success("Loged In")
    navigate('/bookmarked')
  }

  return (
    <form onSubmit={submitHandler} className='logg'>

      <label htmlFor="email">
        <p>Email Address<sup>*</sup></p>

        <input type="email" required 
        value={formData.email} onChange={chaangeHandler} name='email'/>
      </label>
      
      <label htmlFor="password " className='relative'>
        <p>Password<sup className='text-rose-600'>*</sup></p>

        <input type={showPassword?("text"):("password")} required 
        value={formData.password} onChange={chaangeHandler} name='password'/>

        <span className='eyeopenner' onClick={()=>{
          setShowPassword((prev=>!prev))
          console.log("show");
        }}>
          {!showPassword?(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
        </span>

        <Link to="#">
          <div className='text-xs mt-1 text-primary text-right mr-2'>
            Forgot Password
          </div>
        </Link>

      </label>

      <button className='SignBtn'>Sign In</button>

    </form>
  )
}

export default LogInForm
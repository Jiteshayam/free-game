import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import { useNavigate } from 'react-router-dom'

const SignUpForm = ({setIsLoggedIn}) => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    Username:"",
    email:"",
    password:"",
    confirmPassword:"",
    displayname:""
  })
  

  const [showPassword, setShowPassword] = useState(false)
  
  function chaangeHandler(e){
    setFormData((prevdata)=>(
      {
        ...prevdata,
        [e.target.name]:e.target.value
      }
    ))
  }
  
  function submitHandler(e){
    e.preventDefault();
    if(formData.password!=formData.confirmPassword){
      toast.error("Passowrd do not match")
      return
    }
    toast.success("Account Created")
    setIsLoggedIn(true)
    navigate('/')
    const accountData = {
      ...formData
    }
  }

  return (
    <form onSubmit={submitHandler} className='logg'>
      
      <label htmlFor="Username">
        <p>User Name<sup>*</sup></p>

        <input type="text" required 
        value={formData.Username} 
        onChange={chaangeHandler} 
        name='Username'
        placeholder='User Name'
        />
      </label>
      
      <label htmlFor="email">
        <p>Email Address<sup>*</sup></p>

        <input type="email" required 
        value={formData.email} 
        onChange={chaangeHandler} 
        name='email'
        placeholder='Email for Password recovery'
        />
      </label>

      <div className='flex gap-4 '>
        <label htmlFor="password" className='relative'>
          <p>Create Password<sup>*</sup></p>

          <input type={showPassword?("text"):("password")} required 
          value={formData.password} 
          onChange={chaangeHandler} 
          name='password'
          placeholder='Enter Passoword'
          />

        <span className='eyeopenner' onClick={()=>{
          setShowPassword((prev=>!prev))
        }}>
          {showPassword?(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>)}
        </span>
        </label>

        <label htmlFor="confirmPassword" className='relative'>
          <p>Confirm Password<sup>*</sup></p>

          <input type={showPassword?("text"):("password")} required 
          value={formData.confirmPassword} 
          onChange={chaangeHandler} 
          name='confirmPassword'
          placeholder='Confirm Password'
          />
          <span className='eyeopenner' onClick={()=>{
          setShowPassword((prev=>!prev))
        }}>
          {showPassword?(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>)}
        </span>
        </label>
      </div>

      <button className='SignBtn'>Sign Up</button>
      
    </form>
  )
}

export default SignUpForm
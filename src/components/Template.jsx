import React from "react";
import LogInForm from "./LogInForm";
import SignUpForm from "./SignUpForm";
import {FcGoogle} from 'react-icons/fc'
import bg from '../assets/y-so-serious.png'

const Template = ({ title, desc1, desc2, image, formtype, setIsLoggedIn }) => {
  return (

    <div className=" logTemp">

      <div className="w-[40%] max-w-96 form33">
        <h1 className="text-primary font-semibold text-5xl">{title}</h1>

        <p className="text-[1.125rem] leading-[1.625rem] mt-4">
          <span className="text-blue-100">{desc1}</span> 
          <span className="text-red">Free</span>
          <span className="text-primary">Game.</span>
          <br />
          <span className="text-blue-100 italic">{desc2}</span>
        </p>

        {formtype === "signup" ? <SignUpForm setIsLoggedIn={setIsLoggedIn} /> : <LogInForm setIsLoggedIn={setIsLoggedIn}/>}

        <div>
          <div className="or">OR</div>
        </div>

        <button className="flex border w-full justify-center items-center rounded-lg font-medium text-blue-100
        border-[#060D13] py-2 gap-x-2 mt-6">
          <FcGoogle/>
          Sign in with Google
        </button>

      </div>

      <div className="loginimg">
        <img src={bg} alt="bg"  width="558px" height="504px"/>
        <img className="absolute -top-4 right-4" 
        src={image} alt="login" width="558px"
         height="504px" loading="lazy" />
      </div>
    </div>
  );
};

export default Template;

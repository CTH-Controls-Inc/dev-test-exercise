'use client'
import { useRef, useState } from "react";

export default function Home() {
  const [emailWarn,setEmailWarn]=useState('');
  const [passwordWarn,setPasswordWarn]=useState('');
  const emailInput=useRef();
  const passwordInput=useRef();

  function verifyEmail(email){
    if(email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)){
      setEmailWarn('');
      emailInput.current.className='block my-[10px] w-[250px]'
    }
    else {
      setEmailWarn('Invalid Email Address');
      emailInput.current.className='block my-[10px] w-[250px] border-2 border-red-500'
    }
  }

  function verifyPassword(password){
    if(password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g)){
      setPasswordWarn('');
      passwordInput.current.className='block my-[10px] w-[250px]'
    }
    else {
      setPasswordWarn('Minimum eight characters, at least one letter and one number');
      passwordInput.current.className='block my-[10px] w-[250px] border-2 border-red-500'
    }
  }
  

  return (
    <form className='w-[320px] h-[390px] my-[100px] mx-auto bg-blue-200 p-[30px] rounded-2xl' method='POST' onSubmit={(e)=>{e.preventDefault()}}>
        <h1 className='text-3xl text-center my-[20px]'>Login</h1>
        <div>
          <label for='email'>Email</label>
          <input ref={emailInput} className='block my-[10px] w-[250px]' onBlur={(e)=>{verifyEmail(e.target.value)}} placeholder='abc@gmail.com'type='text' id='email' name='email'></input>
          <span className='text-red-500 text-xs block'>{emailWarn}</span>
          <label for='password'>Password</label>
          <input ref={passwordInput} className='block my-[10px] w-[250px]' onBlur={(e)=>{verifyPassword(e.target.value)}} type='password' id='password' name='password'></input>
          <span className='text-red-500 text-xs block'>{passwordWarn}</span>
        </div>
        <button className='block my-[30px] bg-blue-500 w-[250px] py-[5px] rounded-xl text-white'>Login</button>
    </form>
  )
}

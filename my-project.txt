'use client'
import { createContext } from 'react'

const Context = createContext()

import React from 'react';
import { useForm } from 'react-hook-form';




function Validate() {
  const{register, handleSubmit, formState:{errors}} = useForm();
  const myfun = ()=>{
    alert('Login successful');
  }
  
  return (
    <div className="row mt-5">
      <div className='col-md-4 shadow-lg mx-96 p-3 border font-semibold rounded-lg'>
      
       <form onSubmit={handleSubmit(myfun)}>
        <div className='card-body mx-20 text-gray-400 text-sm'>
            <div className='form-group flex flex-col p-4'>
                <label htmlFor='email'>Email:</label>
                <input className='form-control rounded p-2' {...register('email', {required:true})}/>
                {errors.email && errors.email.type == "required" && <p className='text-red-600 text-xs'>Please enter your email</p>}
            </div>

            <div className='form-group flex flex-col p-4'>
                <label htmlFor='pwd'>Password:</label>
                <input className='form-control rounded p-2' {...register('pwd', {required:true,minLength:8})}/>
                {errors.pwd && errors.pwd.type == "required" && <p className='text-red-600 text-xs'>Please enter correct Password</p>}
                {errors.pwd && errors.pwd.type == "minLength" && <p className='text-orange-500 text-xs'>enter minimum of 8 characters</p>}
            </div>

            <div className='form-group flex flex-col p-4'>
                <label htmlFor='confirm'>confirm password:</label>
                <input className='form-control rounded p-2' {...register('confirm', {required:true,minLength:8})}/>
                {errors.confirm && errors.confirm.type == "required" && <p className='text-red-600 text-xs'>Please confirm your password</p>}
                {errors.confirm && errors.confirm.type == "minLength" && <p className='text-orange-500 text-xs'>enter minimum of 8 characters</p>}
            </div>

            <div className='form-group flex flex-col p-4'>
                <input type='submit' className='border border-green-700 bg-emerald-700 text-white mx-20 py-1 rounded-full'/>
            </div>
        </div>
        </form>
      </div>

    </div>
  );
}

export default Validate;

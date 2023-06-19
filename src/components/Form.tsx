'use client';

import React, { useState } from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { z } from 'zod';
import { formDataValidator } from '../lib/formDataValidator';

type FormData = z.infer<typeof formDataValidator>;

const Form = () => {
  const [form, setForm] = useState<FormData>({
    email: '',
    password: '',
  });

  const [err, setErr] = useState<string>('');
  // const [isSignIn, setIsSignIn] = useState<boolean>(false);

  function updateForm(key: string) {
    return function (e: React.ChangeEvent<HTMLInputElement>) {
      setForm((prev) => ({
        ...prev,
        [key]: e.target.value.trim(),
      }));
    };
  }

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErr('');
    try {
      formDataValidator.parse(form);
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErr('Not a valid email');
        return;
      }
      setErr('Not a valid email');
    }
    setForm({
      email: '',
      password: '',
    });
  }

  return (
    <div className='font-poppins w-full mx-20 bg-white px-10 py-20 rounded-md border-2 border-gray-200 shadow-md'>
      <h1 className='text-4xl font-semibold'>Welcome Back</h1>
      <p className='font-medium text-lg text-gray-500 mt-4'>
        Please enter your credentials.
      </p>
      <form className='mt-8' onSubmit={handleFormSubmit}>
        <div className='relative flex items-center  text-gray-400 focus-within:text-gray-600'>
          <input
            className={`w-full border-2 border-gray-100 rounded-xl p-3 px-10 mt-1 bg-transparent border-opacity-50 outline-none focus:border-gray-400 transition duration-300 ${
              err && 'border-2 border-red-500'
            }`}
            required
            // type='email'
            name='email'
            value={form.email}
            onChange={updateForm('email')}
            placeholder='Enter your email'
          />

          <HiOutlineMail className='h-5 w-5 absolute ml-3 mt-1 pointer-events-none' />
        </div>
        <div className='mt-3'>
          <div className='relative flex items-center  text-gray-400 focus-within:text-gray-600'>
            <input
              className='w-full border-2 border-gray-100 rounded-xl p-3 px-10 mt-1 bg-transparent border-opacity-50 outline-none focus:border-gray-400 transition duration-300'
              type='password'
              required
              name='password'
              value={form.password}
              onChange={updateForm('password')}
              placeholder='Enter your password'
            />
            <RiLockPasswordLine className='h-5 w-5 absolute ml-3 mt-1 pointer-events-none' />
          </div>
        </div>
        <div className='mt-4 flex justify-between items-center'>
          <div>
            <input type='checkbox' id='signedIn' />
            <label className='ml-2 font-medium text-base' htmlFor='signedIn'>
              Stay signed in
            </label>
          </div>
          <button className='font-medium text-base text-violet-500'>
            Forgot password
          </button>
        </div>
        <div className='mt-5 flex flex-col gap-y-4'>
          <button className='bg-indigo-500 rounded-lg text-white text-lg py-3 w-full  hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2'>
            Sign In
            {/* {isSignIn ? 'Log Out' : 'Sign In'} */}
          </button>

          <div className='mt-3 flex justify-center items-center text-gray-500'>
            {err !== '' ? (
              <div className='text-center text-md text-red-500'>{err}</div>
            ) : (
              <p className='text-center text-md'>Welcome back !</p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;

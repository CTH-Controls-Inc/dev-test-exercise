'use client'

import React, { useState } from 'react'
import validator from 'validator'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [validEmail, setValidEmail] = useState(true)

  const handleEmailChange = (e) => {
    const newEmail = e.target.value
    setEmail(newEmail)
    validator.isEmail(newEmail) ? setValidEmail(true) : setValidEmail(false)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    //form submission logic would go here
  }

  return (
    <main className='flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100 '>
      <div className='w-full sm:w-1/2 lg:w-1/3'>
        <form
          className='p-6 mt-8 bg-white rounded shadow-md'
          onSubmit={handleSubmit}
          noValidate>
          <div className='mb-4'>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-700'>
              Email
            </label>
            <input
              className={`input input-bordered w-full ${
                !validEmail && email !== '' ? 'input-error' : ''
              }`}
              placeholder='Email'
              type='text'
              value={email}
              onChange={handleEmailChange}
              id='email'
              aria-describedby='email-error'
            />
            {!validEmail && email !== '' && (
              <p className='text-error' id='email-error'>
                Please enter a valid email address
              </p>
            )}
          </div>
          <div className='mb-6'>
            <label
              htmlFor='password'
              className='block text-sm font-medium text-gray-700'>
              Password
            </label>
            <input
              className='input input-bordered w-full'
              placeholder='Password'
              type='password'
              value={password}
              onChange={handlePasswordChange}
              id='password'
            />
          </div>
          <div className='mb-4'>
            <button className='btn'>Login</button>
          </div>
        </form>
      </div>
    </main>
  )
}

export default Login


'use client';
import React, { useRef } from 'react'

import Image from 'next/image'

export default function LogInPage() {
  
  const loginFunction = () => {
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email: "great"}),
    }).then((response) => console.log(response.status))
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='flex flex-col space-y-3'>

      <input type="text" placeholder='Enter your email address'/>
      <input type="password" placeholder='Enter your password'/>
      <button onClick={loginFunction}>Log In</button>
      </div>
    </main>
  )
}

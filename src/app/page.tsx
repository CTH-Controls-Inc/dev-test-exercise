'use client'
import { FieldValues, useForm } from "react-hook-form";
import { useState } from "react"
import { isValidEmail } from "./validade-email";
export default function Home() {

  const [error, setError] = useState("")
  const { handleSubmit, register } = useForm()

  const handleLogin = async (data: FieldValues) => {
    if (!isValidEmail(data.email)) {
      setError('Email format invalid')
    }
  }

  return (
    <div className='flex flex-col bg-gradient-to-r h-full from-blue-800 to-blue-400 justify-center items-center'>
      <p className='text-3xl font-bold text-white'>Login</p>
      <form
        onSubmit={handleSubmit(handleLogin)}
      >
        <div className="flex flex-col m-4 p-8 bg-white rounded-md shadow-md">

          <p className='text-l text-gray-800 pb-2 pl-2'>Email</p>
          <input
            {...register}
            className={`rounded-md border-solid border-2 p-2 ${error ? 'border-red-500' : 'border-gray-500'}`}
            placeholder="email"
            onChange={(e) => setError("")}
          />
          <p className='text-md text-red-600 py-2  pl-2'>{error}</p>
          <p className='text-l text-gray-800 py-2  pl-2'>Password</p>
          <input
            {...register}
            className="rounded-md border-gray-500 border-solid border-2 p-2"
            type="password"
            placeholder="password"
            onChange={(e) => setError("")}
          />
          <button
            className="w-fit rounded-3xl px-8 py-2 bg-green-500 mt-4 text-white self-center hover:bg-green-800"
          >Send</button>

        </div>
      </form>
    </div>
  )
}

import { InputKeys } from '@/const/types'
import { useRouter } from 'next/router'
import React, { useRef, useState } from 'react'
import toast from 'react-hot-toast'


const style = {
  inputRegular: 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5',
  label: "block mb-2 text-lg font-medium text-gray-900 dark:text-white",
  inputError: 'bg-gray-50 border border-red-600 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5',
  errorText: 'text-red-600 font-bold text-lg'
}

export default function LogInPage() {
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const [emailError, setEmailError] = useState<string | boolean>(false)
  const [passwordError, setPasswordError] = useState<string | boolean>(false)
  const {push} = useRouter()
  const resetErrors = () => {
    setEmailError(false)
    setPasswordError(false)
  }
  const loginFunction = () => {
    try {
      fetch('/api/log-in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ [InputKeys.EMAIL]: emailRef.current?.value, [InputKeys.PASSWORD]: passwordRef.current?.value }),
      }).then((response) => {
        resetErrors()
        if (!response.ok) {
          response.json().then(({error, key}) => {
            switch (key) {
              case InputKeys.EMAIL:
                toast.error(error)
                setEmailError(error)
                if(emailRef.current) emailRef.current.focus()
                break;
              case InputKeys.PASSWORD:
                toast.error(error)
                setPasswordError(error)
                if(passwordRef.current) passwordRef.current.focus()
              default:
                break;
            }
          })
        } else {
          response.json().then(({user}) => {            
            toast.success(`Welcome: ${user.username}`)
            push('/')
          })
        }
      })

    } catch (error) {
      console.log(error);

    }
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='flex flex-col space-y-3'>
        <div>
          <label
            htmlFor="email"
            className={style.label}
          >
            Email Address
          </label>
          <input
            type="text"
            id="email"
            className={emailError ? style.inputError : style.inputRegular}
            placeholder="mail@blob.com"
            required
            ref={emailRef}
          />
        </div>
          {
            emailError ? <span className={style.errorText}>{emailError}</span> : null
          }
        <div>
          <label
            htmlFor="password"
            className={style.label}
            >
            Password
          </label>
          <input
            type="password"
            id="password"
            className={passwordError ? style.inputError : style.inputRegular}
            placeholder="*****"
            required
            ref={passwordRef}
            />
        </div>
            {
              passwordError ? <span className={style.errorText}>{passwordError}</span> : null
            }

        <button onClick={loginFunction}>Log In</button>
      </div>
    </main>
  )
}

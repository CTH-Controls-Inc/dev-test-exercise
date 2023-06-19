'use client'

import React, { useState } from 'react'
import GeneralInput from './GeneralInput'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const [message, setMessage] = useState('');

    const regEmail =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const enterEmail = (e: any) => {
        e.preventDefault();
        setEmail(e.target.value);
    };

    const enterPassword = (e: any) => {
        e.preventDefault();
        setPassword(e.target.value);
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {

        if(email === ''){
            e.preventDefault();
            setErrorEmail(true);
            setMessage('Enter email.');
        }
        else if(!regEmail.test(email) && email !== ''){
            e.preventDefault();
            setErrorEmail(true);
            setMessage('Email is not valid.');
        } else if(password === ''){
            e.preventDefault();
            setErrorEmail(false)
            setErrorPassword(true);
            setMessage('Enter Password.');
        } else{
            e.preventDefault();
            alert('Thank you! This is just a demo :)')
            setEmail('');
            setPassword('');
            setRememberMe(false);
            setErrorEmail(false);
            setErrorPassword(false);
            setMessage('');
        }
    }

    return (
        <div>
            <div className='text-center'>
                <h2 className='text-3xl text-bold mb-4'>Sign in to your account</h2>
                <p>
                    or <a className='text-sky-400 cursor-pointer'>Sign Up</a>
                </p>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <GeneralInput text='text' placeholder='Email Address' value={email} propFunction={enterEmail} error={errorEmail} />
                    <GeneralInput text='password' placeholder='Password' value={password} propFunction={enterPassword} error={errorPassword}/>
                </div>
                {message && (
                        <div className='my-1 text-[red] font-light text-[12px]'>
                        {message}
                        </div>
                )}
                <div className='flex justify-between my-2'>
                    <div>
                        <input type='checkbox' checked={rememberMe} className='mr-2'onChange={() => setRememberMe(true)}/>
                        <label>Remember Me</label>
                    </div>
                    <div>
                        <a className='text-sky-400 cursor-pointer'>Forgot your password</a>
                    </div>
                </div>
                <div>
                    <button className='mt-4 my-2 bg-blue-700 text-white w-full p-2 hover:bg-blue-900 transition-colors duration-200'>Sign In</button>
                </div>
            </form>
        </div>
    )
}

export default Login

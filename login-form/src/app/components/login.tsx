"use client"; // This is a client component

import type { NextPage } from 'next';
import Head from 'next/head';
import validator from 'validator';
import React, { useState, useEffect } from 'react';

const Login: NextPage = () => {
const [errorCss, setErrorCss] = useState({});

useEffect(() => {
    // render on update of CSS
}, [errorCss]);

const validateEmail = (e) => {
    const email = e.target.value;
    if (validator.isEmail(email)) {
          setErrorCss({});
        } else {
          setErrorCss({border: "3px solid red"});
        }
}

  return (
    <div>
      <Head>
        <title>Login Page</title>
      </Head>
      <main>
        <form>
              <h3 className ="login-header"> Login Page </h3>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email"  style = {errorCss} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => validateEmail(e)}/>
              </div>
               <div className="form-group">
                 <label htmlFor="exampleInputPassword1">Password</label>
                 <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
               </div>
               <div>
               <button type="button" className="btn btn-primary">Login</button>
               </div>
        </form>
      </main>
    </div>
  )
}

export default Login;

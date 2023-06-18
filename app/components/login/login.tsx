"use client";

import Head from "next/head";
import React, { useState, ChangeEvent } from "react";

const Login = () => {
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const validateEmailId = (event: ChangeEvent<HTMLInputElement>) => {
    const emailId = event.target.value;
    setEmail(emailId);
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailId)) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
  };

  return (
    <div className="flex justify-center">
      <Head>
        <title>Login Page</title>
      </Head>
      <div className="bg-white p-12 w-1/3 rounded-xl">
        <form className="w-full max-w-sm">
          <h3 className="mt-6 font-bold text-xl mb-8 text-center"> Login </h3>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="emailId"
              >
                Email Address
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className={`${!isEmailValid ? "input-error" : ""} input-field`}
                id="emailId"
                type="text"
                value={email}
                onChange={validateEmailId}
              />
              {!isEmailValid && (
                <div className="text-red-600 text-sm">
                  Invalid email address!
                </div>
              )}
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="password"
              >
                Password
              </label>
            </div>
            <div className="md:w-2/3">
              <input className="input-field" id="password" type="password" value={password} onChange={(evt) => setPassword(evt.target.value)}/>
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button className={`${(!isEmailValid || !email || !password) && 'btn-disabled'} btn-primary`} type="button" disabled={!isEmailValid || !email || !password}>
                Sign In
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

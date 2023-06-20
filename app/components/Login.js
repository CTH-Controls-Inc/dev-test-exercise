"use client";

import { useState, useEffect } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(null);

  useEffect(() => {
    // regex to validate email
    if (
      email !== "" &&
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    ) {
      setIsEmailValid(true);
    } else if (email !== "") {
      setIsEmailValid(false);
    }
  }, [email]);

  console.log(isEmailValid);

  const disableSubmitButton = () => {
    if (email !== "" && password !== "" && isEmailValid) return false;
    return true;
  };

  const onSubmit = () => {
    alert(`Login successful for ${email}`);
  };

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 w-full md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign in to your account
          </h1>
          <div className="space-y-4 md:space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`${
                  isEmailValid !== false ? "bg-gray-50" : "bg-red-50"
                } border ${
                  isEmailValid !== false ? "border-gray-300" : "border-red-300"
                } text-gray-900 sm:text-sm rounded-lg focus:ring-fuchsia-600 focus:border-fuchsia-600 block w-full p-2.5 ${
                  isEmailValid !== false
                    ? "dark:bg-gray-700"
                    : "dark:bg-red-700"
                } ${
                  isEmailValid !== false
                    ? "dark:border-gray-600"
                    : "dark:border-red-600"
                } dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                placeholder="Enter Email address"
              />
            </div>
            {isEmailValid === false && (
              <span className="text-xs font-medium text-red-600 hover:underline dark:text-red-700">
                Invalid Email Address
              </span>
            )}
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-fuchsia-600 focus:border-fuchsia-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <div className="flex items-center justify-end">
              <a
                href="#"
                className="text-sm font-medium text-fuchsia-600 hover:underline dark:text-fuchsia-500"
              >
                Forgot password?
              </a>
            </div>
            <button
              type="button"
              onClick={onSubmit}
              disabled={disableSubmitButton()}
              className="w-full text-white bg-fuchsia-600 disabled:cursor-not-allowed disabled:bg-gray-500 disabled:hover:bg-gray-500 hover:bg-fuchsia-700 focus:ring-4 focus:outline-none focus:ring-fuchsia-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-fuchsia-600 dark:hover:bg-fuchsia-700 dark:focus:ring-fuchsia-800"
            >
              Sign in
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              {"Don't have an account? "}
              <a
                href="#"
                className="font-medium text-fuchsia-600 hover:underline dark:text-fuchsia-500"
              >
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

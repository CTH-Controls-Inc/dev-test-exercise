"use client";
import React, { useState } from "react";
import auth from "../authentication/Authenticator";
import Message from "./message";

enum Fields {
    USERNAME = "username",
    PASSWORD = "password"
};

function Login(): JSX.Element {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isValidEmail, setIsValidEmail] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [field, setField] = useState<{ [key: string]: string } | null>(null);

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const onBlurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
      e.preventDefault();
    const name = e.currentTarget.name;
    if (name === Fields.USERNAME && !validateEmail(e.currentTarget.value)) {
        setErrorMessage("Invalid email");
        return setIsValidEmail(false);
    }
    setIsValidEmail(true);
  }

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.currentTarget.name;
    const style = e.currentTarget.style;
    if (name === Fields.USERNAME && !validateEmail(e.currentTarget.value)) {
        style.border = '2px solid red';
        style.outline = 'none';
    } else {
        style.border = '1px solid #ccc';
        style.outline = 'none';
    }

    setField({
      ...field,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  return (
    <div className="login-container">
      {errorMessage && (
        <Message
          isError
          message={errorMessage}
          onClose={() => {
            setErrorMessage(null);
          }}
        />
      )}
      {success && (
        <Message
          isError={false}
          message="Logged in successfully!"
          onClose={() => {
            setErrorMessage(null);
            setSuccess(false);
          }}
        />
      )}
      <div className="company-logo">
        <span className="company-title">Login Module</span>
        <div className="company-phrase">
          Connect with your pals through web
        </div>
      </div>
      <div>
        <div>
          <div className="form-container">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter Username"
              onChange={(e) => onChangeHandler(e)}
              onBlur={(e) => onBlurHandler(e)}
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              onChange={(e) => onChangeHandler(e)}
            />
            <div className="divider"></div>
            <button
              className="login"
              onClick={() => {
                auth.login(
                  field?.username as string,
                  field?.password as string,
                  (isSuccess: boolean) => {
                    if (isSuccess) {
                      setSuccess(true);
                      setErrorMessage(null);
                    } else if(isValidEmail) {
                      setErrorMessage("Invalid credentials, please try again");
                      setSuccess(false);
                    }
                  }
                );
              }}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

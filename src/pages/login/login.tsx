import React, { useState } from 'react';
import Image from 'next/image';

import styles from './login.module.scss';

const LoginPage = (): React.JSX.Element => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form Submitted: Email: ${email} password: ${password}`)
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address.');
    }
  };

  return (
    <>
      <div className='container m-3'>
        <Image
          src="/images/logo.gif"
          height={63}
          width={130}
          alt="login-hero"
        />
      </div>
      <div className='container m-5'>
        <div className="row gx-5">
          <div className={`col-lg-6 col-md-12 col-sm-0 ${styles.hideSM}`}>
            <div className='d-flex justify-content-center'>
              <Image
                src="/images/login-page.jpg"
                height={400}
                width={600}
                alt="login-hero"
              />
            </div>
          </div>
          <div className='col-lg-6 col-md-12 col-sm-12'>
            <h1>Welcome Back</h1>
            <p>To keep connected with us please login with your email and password</p>
            <form>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  className={`${emailError && styles.error} form-control`}
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  onBlur={validateEmail}
                />
                {emailError && (
                <div className="invalid-feedback d-block">
                  Please provide a valid Email.
                </div>
                )}
                <div className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  className="form-control"
                  type="password"
                  onChange={handlePasswordChange}
                  />
              </div>
              <button
                className={`btn btn-primary ${!!emailError && styles.disabled}`}
                onClick={handleSubmit}
                disabled={!!emailError}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

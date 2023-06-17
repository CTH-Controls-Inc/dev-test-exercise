import React from 'react';
import LoginForm from '../components/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <div className= "form-header">
      <h1 >Login Page</h1>
      <LoginForm />

      <style jsx>{`
        .form-header {
          display: top;
          text-align: center;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin-top: 10px;
        }
      `}</style>
    </div>
  );
};

export default LoginPage;

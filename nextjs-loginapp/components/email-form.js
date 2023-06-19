import { useState } from 'react';
import styles from '../styles/email.module.css';

export default function LoginForm() {
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (validRegex.test(event.target.value)){
      setMessage("Valid Email Address")
    }
    else{
      setMessage("Invalid Email Address")
    }
  };

  return (
    <div>
      <form>
        <h2>CTH Controls Exercise: Please enter your email</h2>
        <label>
          Email:
          <input type="email" name="email"
          onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
         Password:
         <input type="text" name="password" required />
       </label>
        <h3>Result: {message}</h3>
      </form>
    </div>
  )
}
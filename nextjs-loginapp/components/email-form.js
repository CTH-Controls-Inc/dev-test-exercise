import { useState } from 'react';
import styles from '../styles/email.module.css';

export default function LoginForm() {
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  };

  return (
    <div>
      <form>
        <h2>CTH Controls Exercise: Please enter your email</h2>
        <label>
          Email:
          <input type="email" name="email"/>
        </label>
        <br />
        <br />
        <label>
         Password:
         <input type="text" name="password" required />
       </label>
        <h3>Result: </h3>
      </form>
    </div>
  )
}
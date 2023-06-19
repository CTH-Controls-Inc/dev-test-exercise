import { useState } from 'react';
import styles from '../styles/email.module.css';

export default function LoginForm() {
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (validRegex.test(event.target.value)){
      event.target.style.border = '5px solid green'
      setMessage("Valid Email Address")
    }
    else{
      event.target.style.border = '5px solid red'
      setMessage("Invalid Email Address")
    }
  };

  return (
    <div className={styles.formcenter}>
      <form>
        <h2>CTH Controls Exercise: Please enter your email</h2>
        <h3>Result: {message}</h3>
        <label>
          Email:
          <input type="email" name="email"
          onChange={handleChange}
          style={{border: '1px solid grey'}}
          />
        </label>
        <br />
        <br />
        <label>
         Password:
         <input type="text" name="password" required />
       </label>

      </form>
    </div>
  )
}
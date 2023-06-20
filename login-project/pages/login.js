import { useState } from 'react';


const Login = () => {
    const [email,setEmail] =useState('');
    const [password,setPassword] = useState('');
    const [emailError, setEmailError] = useState('')

    const HandleEmailscoming = (e) =>{

        setEmail(e.target.value);
        setEmailError('');
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!validateEmail(email)){
            setEmailError('Invalid email address');
            alert('please try again!')
            return;
        }

        // Does the login here
        console.log("login form submit");
    };
     // validates if the email are accurate 
    const validateEmail = (email) => {
        const re2 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re2.test(String(email).toLowerCase());
    };
    //make sure that the emails are correct if not a red solid line displays error 
    return(
        <div>
            <h1>Login INFO</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input 
                      type="text"
                      placeholder={email}
                      onChange={HandleEmailscoming}
                      style={{ border:emailError? '2px solid red':'none'}}

                   />
                   {emailError && <p>{emailError}</p>}
                </div>
                <div>

                    <label>Password:</label>
                    <input 
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      
                      />
                </div>
                <button type="submit">Login</button>
            </form>

        </div>
    );
};

export default Login;
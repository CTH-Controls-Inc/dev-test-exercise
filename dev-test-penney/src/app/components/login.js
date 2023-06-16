'use client'
import React, { useState } from 'react';

// Component that handles the login UI and functionality

const Login = () => {
    // Hooks to handle the email and password fields
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailvalid, setEmailValid] = useState(true);

    // Function to handle the email and password fields
    const handleEmailChange = (event) => {
        const emailcurrentstate = event.target.value;
        setEmail(emailcurrentstate);
        console.log(email.length)

        // Validate the email field
        if (!validateEmail(emailcurrentstate) && emailcurrentstate.length > 0) {
            setEmailValid(false);
            return;
        } else {
            setEmailValid(true);
        }
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    // Function to validate the email field
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Function to handle the login submission
    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('Login submitted');
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div style={styles.center}>
            <div style={styles.login}>
                <h2 style={styles.logintitle}>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div style={styles.loginfield}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={handleEmailChange}
                            style={emailvalid ? {
                                border: '3px solid black'
                        } : { 
                                border: '3px solid red',
                                boxShadow: '0px 0px 12px red'
                            }}
                        />
                    </div>
                    <div style={styles.loginfield}>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </div>
                    <div style={styles.loginbuttoncontainer}>
                        <button style={styles.loginbutton} type="submit">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;

const styles = {
    logintitle: {
        marginBottom: '20px',
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
    },
    login: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    loginfield: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '1rem',
    },
    loginbuttoncontainer: {
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
    },
    loginbutton: {
        marginTop: '1rem',
        marginBottom: '1rem',
        width: '100%',
        height: '3rem',
        borderRadius: '0.5rem',
        backgroundColor: '#3821ae',
        color: '#ffffff',
        fontSize: '1rem',
        fontWeight: '600',
    },
};
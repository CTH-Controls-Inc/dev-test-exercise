import React, { useState, useEffect } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isEmailBlurred, setIsEmailBlurred] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setIsEmailValid(validateEmail(e.target.value));
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const validateEmail = (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
    };

    const handleEmailBlur = () => {
        setIsEmailBlurred(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEmailValid) {
            console.log("Email:", email);
            console.log("Password:", password);
        }
    };

    const formContainerStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
    };


    const formStyle = {
        width: "90%",
        maxWidth: "400px",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        backgroundColor: "#f9f9f9"
    };

    const inputStyle = {
        width: "100%",
        marginBottom: "10px",
        padding: "8px 12px",
        border: isEmailValid ? "1px solid #ccc" : "2px solid #ff5f5f",
        borderRadius: "4px"
    };
    const inputStylePass = {
        width: "100%",
        marginBottom: "10px",
        padding: "8px 12px",
        border: "1px solid #ccc",
        borderRadius: "4px"
    };

    const errorContainerStyle = {
        marginBottom: "10px",
        padding: "8px 12px",
        backgroundColor: "#ffe5e5",
        border: isEmailValid ? "none" : "1px solid #ff5f5f",
        borderRadius: "4px",
        color: "#ff5f5f",
        fontSize: "14px"
    };

    const buttonContainerStyle = {
        display: "flex",
        justifyContent: "center"
    };

    const buttonStyle = {
        width: "100%",
        maxWidth: "200px",
        backgroundColor: "#4CAF50",
        color: "white",
        padding: "10px 12px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer"
    };

    return (
        <div style={formContainerStyle}>
            <form style={formStyle} onSubmit={handleSubmit}>
                <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Login</h1>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        onBlur={handleEmailBlur}
                        style={{
                            ...inputStyle,
                            border: isEmailBlurred && !isEmailValid ? "2px solid #ff5f5f" : "1px solid #ccc"
                        }}
                    />
                    {isEmailBlurred && !isEmailValid && (
                        <div style={errorContainerStyle}>
                            Please enter a valid email address.
                        </div>
                    )}
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        style={inputStylePass}
                    />
                </div>
                <div style={buttonContainerStyle}>
                    <button type="submit" style={buttonStyle}>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;
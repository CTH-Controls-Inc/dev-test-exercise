import React, { useRef } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import { useState } from "react";

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isValid, setIsValid] = useState();
    const input = useRef(null);

    const handleOnChangeUserName = (e) => {
        setUsername(e.target.value);
        let regExp = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if(!username.match(regExp) && username.length > 1) {
            setIsValid(false);
        } else {
            setIsValid(true);
        }
    }

    const handleOnChangePassword = (e) => {
        setPassword(e.target.value);
    }

    return (
        <div className="container mt-5">
            <form>
                <div className="form-row col-6">
                    <label>Username:</label>
                    <input ref={input} type="text" style={(!isValid && document.activeElement === input.current) ? {borderColor : 'red'} : {}} className="form-control" onChange={handleOnChangeUserName} value={username}></input>
                    <p>{(!isValid && document.activeElement === input.current)  ? "Email is invalid" : null}</p>
                </div>
                <div className="form-row col-6">
                    <label>Password:</label>
                    <input type="password" className="form-control" onChange={handleOnChangePassword} value={password}></input>
                </div>
            </form>
        </div>
    )
} 

export default Login;
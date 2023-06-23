import React from 'react'
import { useState } from "react"
import { toast } from "react-toastify";


// I have used two separate states of input field we, can also use object in case the form is very large.
//Below Regex allows:
// 1. string starts with upper or lower case character
// 2. any number of alphabets also includes numvbers and (_,.)
// 3. followed by @
// 4. lowercase alphabet any times
// 5. followed by .
// 6. and two or three alphabets

// valid is used to represent whether the given email is valid or not and we are checking it twice
// on event onChange and OnSubmit to ensure details are correct because of react virtual dom

// As per the valid condition we are displaying the paragraph

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [valid, setValid] = useState(true);


    function handleSubmit(event) {
        event.preventDefault();

        const check = /^[a-zA-Z][a-zA-Z0-9_.]+@[a-z]+\.[a-z]{1,3}$/.test(event.target[0].value)
        if (check) {
            toast.success("Details entered are correct !")
        }
        else {
            toast.error("Invalid details !")
        }

        setEmail("")
        setPassword("")
        setValid(true)

    }

    function handleField(event) {
        let { name, value } = event.target;

        if (name == "password") {
            setPassword(value)
        }

        if (name == "email") {
            const testemail = /^[a-zA-Z][a-zA-Z0-9_.]+@[a-z]+\.[a-z]{1,3}$/.test(email)
            setEmail(value)
            console.log(email)
            setValid(testemail)
        }

    }

    return (
        <div className="card">
            <form onSubmit={handleSubmit}>
                <div className="form-block">
                    <div className="form-field">
                        <label htmlFor="emailfield">Email</label>
                        <input required id="emailfield" name="email" className="input-field" value={email} type="text" onChange={handleField} />
                        <p className={valid ? 'warning' : ''}>Please enter valid email address !</p>
                    </div>
                    <div className="form-field">
                        <label htmlFor="passwordfield">Password</label>
                        <input required onChange={handleField} id="passwordfield" name="password" value={password} className="input-field" type="password" />
                    </div>

                    <button className="btn" type="submit">Submit</button>

                </div>
            </form>
        </div>
    )
}

export default Login
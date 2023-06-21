"use client";
import React, { useEffect, useState } from "react";

export default function LoginComponent(){
    
    // useState Hook to change color
    const[outlineColor, setOutlineColor] = useState("p-1 m-1 outline-[#2F3E46]");

    // function for onchange event
    const emailOnChange = (event) => {
        if(validateEmail(event.target.value)){
            setOutlineColor("p-1 m-1 outline-green-700");
        } else if(event.target.value == "") {
            setOutlineColor("p-1 m-1 outline-[#2F3E46]");
        } else{
            setOutlineColor("p-1 m-1 outline-red-700");
        }
    }

    // validate email input function
    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };

    return(
    <>
        <form>
            <div className="p-2.5 border-2 border-[#2F3E46] m-2.5 relative">
                <label className="absolute bg-[#DCE1D8] text-[#2F3E46] -top-2.5 left-5 px-1">Username</label>
                <input type='email' className={outlineColor} onChange={emailOnChange} placeholder='JohnDoe@gmail.com' required />
            </div>

            <div className="p-2.5 border-2 border-[#2F3E46] m-2.5 relative">
                <label className="absolute bg-[#DCE1D8] text-[#2F3E46] -top-2.5 left-5 px-1">Password</label>
                <input type='password' className="p-1 m-1" placeholder='Password' required />
            </div>
            <div>
                <button type="submit" className="px-2.5 mx-2.5 bg-[#2F3E46] text-[#CAD2C5]">Log in</button>
            </div>
        </form>
    </>
    );
}
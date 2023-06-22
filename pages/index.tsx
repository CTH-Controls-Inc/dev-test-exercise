import React, { useState } from "react"

const index =()=>{

  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [emailDisplay, setemailDisplay] = useState(false)
  const [passDisplay, setpassDisplay] = useState(false)
  const [disabled, setDisabled] = useState(false)



  const handleSubmit =  (e:any)=>{
    e.preventDefault();

    if (!email || (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))) {
      setemailDisplay(true)
    }else{
      setemailDisplay(false)
    }
    
    if (!pass) {
      setpassDisplay(true)
    }else{
      setpassDisplay(false)
    }
    
  
    if ((emailDisplay == false) && (passDisplay==false) && (email !="") && (pass !="")) {
          console.log("form submited")
          setEmail("")
          setPass("")
          setDisabled(true)
  
    }
    

  }








return <>
<form className="loginContainer flex justify-center h-screen bg-slate-100 " onSubmit={handleSubmit}>
    <div className="loginCard flex flex-col grow shadow-lg place-content-center max-h-96 m-7 bg-white rounded max-w-sm p-4">

      <h1 className="loginText text-center text-xl font-bold text-slate-500	">Login</h1>
      <div className="username">
        <span className={`text-sm text-red-400 ${emailDisplay ? 'block' : 'hidden'}`}>Email Id is Invalid</span>
        <span className="block py-2">Email</span>
            <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} name="email" className="w-full rounded-sm p-1 px-2 bg-slate-100" placeholder="Enter Username"/>
      </div>

      <div className="password">
      <span className={`text-sm pt-2 text-red-400 ${passDisplay ? 'block' : 'hidden'}`}>Password is Required</span>
        <span className="block py-2">Password</span>
      <input type="text" value={pass} onChange={(e)=>{setPass(e.target.value)}} name="password" className="w-full rounded-sm p-1 px-2 bg-slate-100" placeholder="Enter Password"/>
      </div>
      <button className={` text-white py-1 my-4 rounded-sm ${disabled ? 'bg-sky-100' : 'bg-sky-600'}`} disabled={disabled} type="submit">Login Now</button>

    </div>
</form>

</>


}

export default index;
import React, { useState } from "react";

const LoginForm = (props) => {

const [email,setemail]=useState("");
const [password,setpassword]=useState("");

  function formsubmit(){
    if(email=="" || password==""){
      alert("Require All fieled");
      return;
    }
      const data={email:email,password:password}
      props.userLoginHandler(data);
      setemail(''); setpassword('');
  }

    return(
      <div className="w-full h-full">
          <div className="w-[400px] p-4 m-auto text-center">
            <div className="text-color2 p-7  text-2xl">Login to your Account</div>
            <input type="email" onChange={(e)=>setemail(e.target.value)}  className="text-sm p-2 mt-4 rounded-md w-full border" placeholder="Email"/>
            <p className="text-red-700 text-sm text-left px-2 relative">{email==""?'Email Required':''}</p>
            <input type="password" onChange={(e)=>setpassword(e.target.value)}  className="text-sm p-2 mt-4 rounded-md w-full border" placeholder="Password"/>
            <p className="text-red-700 text-sm text-left px-2 relative">{password==""?'Password Required':''}</p>
            <button onClick={formsubmit} className="bg-color2 p-2 text-secondary font-semibold rounded-md px-5 w-full my-4">Login</button>
          </div>
      </div>
    );
}

export default LoginForm;
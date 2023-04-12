import React from 'react'
// import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import { NavLink } from 'react-router-dom'


function Signup() {

  const navigate = useNavigate();
  
  const [user, setUser] = useState({
    user_name:"", user_email:"", user_password:"", user_ConfirmPassword:""
  });

  const handleInputs = (e) => {
      const { name, value } = e.target
      setUser({...user, [name]:value});
  }

  // fetch , async, await method :
  const register = async(e) => {
        e.preventDefault();
        const {  user_name, user_email, user_password, user_ConfirmPassword } = user;
        if (!user_name || !user_email || !user_password || !user_ConfirmPassword) {
          alert("Please fill all the fields");
        }
        if (user_name && user_email && user_password && (user_password === user_ConfirmPassword)){
          const res = await fetch("http://localhost:8080/signup", {
            method: 'POST',
            mode:"cors",
            headers: {
              'Accept': 'application/json',
              "content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            body:JSON.stringify({
              user_name, user_email, user_password, user_ConfirmPassword
          })
        });
      
          const data =  res.json();
          console.log(data);
          let path = '/dashboard'; 
          navigate(path);
      
          // if(res.status === 400 || !data) {
          //   window.alert("login  Fail");
          //   console.log("login Fail");
          // }else {
          //   window.alert("login  Successfull");
          //   console.log("login Successfull");
          //   
            
          // }
      
        }
    }


  return (
    <>
        <form method='POST'>
               <div className="signupForm">
                  <h1 className='formHeading'>Register</h1>
                  <p className='formAlert'>Please Fill In This Form to Create an Account.</p>
                  <hr />

                  <label for="Username"><b>Username</b></label>
                  <input type="text" placeholder="Enter Your Name" name="user_name" id="userName" value={user.user_name} onChange={handleInputs} required />

                  <label for="email"><b>Email</b></label>
                  <input type="email"   placeholder="Enter Email" name="user_email" id="email" value={user.user_email} onChange={handleInputs} required />

                  <label for="psw"><b>Password (8 characters minimum)</b></label>
                  <input type="password" placeholder="Enter Password" name="user_password" id="psw"  minlength="8" value={user.user_password }onChange={handleInputs} required />

                  <label for="psw-repeat"><b>Confirm Password</b></label>
                  <input type="password" placeholder="Confirm Password" name="user_ConfirmPassword"  minlength="8" id="psw-confirm" value={user.user_ConfirmPassword}  onChange={handleInputs} required />
                  <hr className='dividerLine' />
                  <p>By creating an account you agree to our <NavLink to="#">Terms & Privacy</NavLink>.</p>

                  <button type="submit" className="registerbtn" onClick={register}>Register</button>
            </div>
            
            <div className="container signin">
              <p>Already have an account? <NavLink to="/signup">Log in</NavLink></p>
            </div>
        </form>
    </>
  )
}

export default Signup

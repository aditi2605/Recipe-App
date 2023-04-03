import React from 'react'
// import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import { NavLink } from 'react-router-dom'


function Login() {

  const navigate = useNavigate();
  
  const [user, setUser] = useState({
    user_name:"", user_email:"", user_password:"", user_ConfirmPassword:""
  });

  const handleInputs = (e) => {
      const { name, value } = e.target
      setUser({...user, [name]:value});
  }

  // axios and .then .catch method
  // const register = () => {
  //   const {  user_name, user_email, user_password, user_ConfirmPassword } = user;
  //    if (user_name && user_email && user_password && (user_password === user_ConfirmPassword)){
  //       axios.post("http://localhost:8080/login", user)
  //       .then(res => console.log(res))
  //    }else{
  //     alert("invalid input");
  //    }
  // }



  // fetch , async, await method :
  const register = async(e) => {
        e.preventDefault();
        const {  user_name, user_email, user_password, user_ConfirmPassword } = user;
        if (!user_name || !user_email || !user_password || !user_ConfirmPassword) {
          alert("Please fill all the fields");
        }
        if (user_name && user_email && user_password && (user_password === user_ConfirmPassword)){
          const res = await fetch("http://localhost:8080/login", {
            method: 'POST',
            headers: {
              "content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            body:JSON.stringify({
              user_name, user_email, user_password, user_ConfirmPassword
          })
        });
      
          const data =  res.json();
          console.log(res);
      
          if(res.status === 400 || !data) {
            window.alert("Login Fail");
            console.log("Login Fail");
          }else {
            window.alert("Login Successfull");
            console.log("Login Successfull");
            let path = '/dashboard'; 
            navigate(path);
            
          }
      
        }
    }


  return (
    <>
        <form method='POST'>
               <div className="loginForm">
                  <h1 className='formHeading'>Register</h1>
                  <p className='formAlert'>Please Fill In This Form to Create an Account.</p>
                  <hr />

                  <label for="Username"><b>Username</b></label>
                  <input type="text" placeholder="Enter Your Name" name="user_name" id="userName" value={user.user_name} onChange={handleInputs} required />

                  <label for="email"><b>Email</b></label>
                  <input type="email" pattern='/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/'  placeholder="Enter Email" name="user_email" id="email" value={user.user_email} onChange={handleInputs} required />

                  <label for="psw"><b>Password (8 characters minimum)</b></label>
                  <input type="password" placeholder="Enter Password" name="user_password" id="psw"  minlength="8" value={user.user_password }onChange={handleInputs} required />

                  <label for="psw-repeat"><b>Confirm Password</b></label>
                  <input type="password" placeholder="Confirm Password" name="user_ConfirmPassword"  minlength="8" id="psw-confirm" value={user.user_ConfirmPassword}  onChange={handleInputs} required />
                  <hr className='dividerLine' />
                  <p>By creating an account you agree to our <NavLink to="#">Terms & Privacy</NavLink>.</p>

                  <button type="submit" className="registerbtn" onClick={register}>Register</button>
            </div>
            
            <div className="container signin">
              <p>Already have an account? <NavLink to="/signup">Sign in</NavLink></p>
            </div>
        </form>
    </>
  )
}

export default Login

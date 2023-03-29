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

  let name, value ;
  const handleInputs = (e) => {
      console.log(e);
      name = e.target.name;
      value = e.target.value;

      setUser({...user, [name]:value});
  }

  const postData = async(e) => {
    e.preventDefault();

    const {  user_name, user_email, user_password, user_ConfirmPassword } = user;

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

    if(res.status === 422 || !data) {
      window.alert("Login Fail");
      console.log("Login Fail");
    }else {
      window.alert("Login Successfull");
      console.log("Login Successfull");
      navigate('./signin')
    }

  }


//     const res = axios.post("/login", {
//       method: "POST",
//       headers: {
//         "content-Type": "application/json"
//       },
//       body:JSON.stringify({
//         name , email, psw, pswConfirm
//       })
//     });
//        const Data = await res.json();

//       if(res.status === 422 || !res) {
//         window.alert("Login Fail");
//         console.log("Login Fail");
//       }else {
//         window.alert("Login Successfull");
//         console.log("Login Successfull");
//       }

  

     


  return (
    <>
        <form method='POST'>
               <div className="loginForm">
                  <h1 className='formHeading'>Register</h1>
                  <p className='formAlert'>Please Fill In This Form to Create an Account.</p>
                  <hr />

                  <label for="Username"><b>Username</b></label>
                  <input type="text" placeholder="Enter Your Name" name="user_name" id="userName" value={user.name} onChange={handleInputs} required />


                  <label for="email"><b>Email</b></label>
                  <input type="text" pattern=".+@globex\.com" placeholder="Enter Email" name="user_email" id="email" value={user.email} onChange={handleInputs} required />

                  <label for="psw"><b>Password (8 characters minimum)</b></label>
                  <input type="password" placeholder="Enter Password" name="user_password" id="psw"  minlength="8"value={user.psw }onChange={handleInputs} required />

                  <label for="psw-repeat"><b>Confirm Password</b></label>
                  <input type="password" placeholder="Confirm Password" name="user_ConfirmPassword" id="psw-confirm" value={user.pswConfirm} onChange={handleInputs} required />
                  <hr className='dividerLine' />
                  <p>By creating an account you agree to our <NavLink to="#">Terms & Privacy</NavLink>.</p>

                  <button type="submit" className="registerbtn" onClick={postData}>Register</button>
            </div>
            
            <div className="container signin">
              <p>Already have an account? <NavLink to="/signup">Sign in</NavLink></p>
            </div>
        </form>
    </>
  )
}

export default Login

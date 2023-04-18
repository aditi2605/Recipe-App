import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Login() {

const navigate = useNavigate();

const [login, setLogin] = useState({
  user_email:"", user_password:""
});


const handleInput = (e) => {
  const { name, value } = e.target;
  setLogin({...login, [name]:value});

}
const handleClick = async(e) => {
  e.preventDefault();
  const { user_email, user_password } = login;
  console.log(user_email, user_password);

  const res = await fetch("http://localhost:8080/login", {
    method:'POST',
    mode:'cors',
    headers: {
      "content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body:JSON.stringify({
      user_email, user_password
    })
  });
  console.log(res);
  const data = await res.json();
  console.log(data);
  let path = '/dashboard'; 
  navigate(path);
 
}                 
  
  return (
        <>
            <form  method='POST'>
              {console.log('user',login )}
               <div className="loginForm">
                  <h1 className='formHeading'>Login</h1>
                  <hr />

                  <label for="email"><b>Email</b></label>
                  <input type="email" placeholder="Enter Email" name="user_email" id="email" value={login.user_email} onChange={handleInput} required />

                  <label for="psw"><b>Password </b></label>
                  <input type="password" placeholder="Enter Password" name="user_password" id="psw"  value={login.user_password} onChange={handleInput} required />

                  
                  <hr className='dividerLine' />
                  <p>By creating an account you agree to our <NavLink to="#">Terms & Privacy</NavLink>.</p>

                  <button type="submit" className="signupbtn" onClick={handleClick}>Log In</button>
            </div>
            
            <div className="container login">
              <p>Don’t have an account? <NavLink to="/login">Sign up</NavLink></p>
            </div>
        </form>
        </>
  )
}

export default Login

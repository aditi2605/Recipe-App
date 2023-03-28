import React from 'react'
import { NavLink } from 'react-router-dom'

function Login() {
  return (
    <>
        <form action="" method='POST'>
               <div className="loginForm">
                  <h1 className='formHeading'>Register</h1>
                  <p className='formAlert'>Please Fill In This Form to Create an Account.</p>
                  <hr />

                  <label for="Username"><b>Username</b></label>
                  <input type="text" placeholder="Enter Your Name" name="name" id="userName" required />


                  <label for="email"><b>Email</b></label>
                  <input type="text" pattern=".+@globex\.com" placeholder="Enter Email" name="email" id="email" required />

                  <label for="psw"><b>Password (8 characters minimum)</b></label>
                  <input type="password" placeholder="Enter Password" name="psw" id="psw"  minlength="8" required />

                  <label for="psw-repeat"><b>Confirm Password</b></label>
                  <input type="password" placeholder="Confirm Password" name="psw-confirm" id="psw-confirm" required />
                  <hr className='dividerLine' />
                  <p>By creating an account you agree to our <NavLink to="#">Terms & Privacy</NavLink>.</p>

                  <button type="submit" className="registerbtn">Register</button>
            </div>
            
            <div className="container signin">
              <p>Already have an account? <NavLink to="/signin">Sign in</NavLink></p>
            </div>
        </form>
    </>
  )
}

export default Login

import React from 'react'
import { NavLink } from 'react-router-dom'

function Signup() {
  return (
        <>
            <form action="" method='POST'>
               <div className="signupForm">
                  <h1 className='formHeading'>SignUp</h1>
                  <hr />

                  <label for="email"><b>Email</b></label>
                  <input type="text" pattern=".+@globex\.com" placeholder="Enter Email" name="email" id="email" required />

                  <label for="psw"><b>Password (8 characters minimum)</b></label>
                  <input type="password" placeholder="Enter Password" name="psw" id="psw"  minlength="8" required />

                  <label for="psw-repeat"><b>Confirm Password</b></label>
                  <input type="password" placeholder="Confirm Password" name="psw-confirm" id="psw-confirm" required />
                  <hr className='dividerLine' />
                  <p>By creating an account you agree to our <NavLink to="#">Terms & Privacy</NavLink>.</p>

                  <button type="submit" className="signupbtn">Sign up</button>
            </div>
            
            <div className="container login">
              <p>Don’t have an account? <NavLink to="/login">Log in</NavLink></p>
            </div>
        </form>
        </>
  )
}

export default Signup

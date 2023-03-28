import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Login() {
  const [user, setUser] = useState({
    name:"", email:"", psw:"", pswConfirm:""
  });

  let name, value ;
  const handleInputs = (e) => {
      console.log(e);
      name = e.target.name;
      value = e.target.value;

      setUser({...user, [name]:value});
  }
  return (
    <>
        <form action="" method='POST'>
               <div className="loginForm">
                  <h1 className='formHeading'>Register</h1>
                  <p className='formAlert'>Please Fill In This Form to Create an Account.</p>
                  <hr />

                  <label for="Username"><b>Username</b></label>
                  <input type="text" placeholder="Enter Your Name" name="name" id="userName" value={user.name} onChange={handleInputs} required />


                  <label for="email"><b>Email</b></label>
                  <input type="text" pattern=".+@globex\.com" placeholder="Enter Email" name="email" id="email" value={user.email} onChange={handleInputs} required />

                  <label for="psw"><b>Password (8 characters minimum)</b></label>
                  <input type="password" placeholder="Enter Password" name="psw" id="psw"  minlength="8"value={user.psw }onChange={handleInputs} required />

                  <label for="psw-repeat"><b>Confirm Password</b></label>
                  <input type="password" placeholder="Confirm Password" name="pswConfirm" id="psw-confirm" value={user.pswConfirm} onChange={handleInputs} required />
                  <hr className='dividerLine' />
                  <p>By creating an account you agree to our <NavLink to="#">Terms & Privacy</NavLink>.</p>

                  <button type="submit" className="registerbtn">Register</button>
            </div>
            
            <div className="container signin">
              <p>Already have an account? <NavLink to="/signup">Sign in</NavLink></p>
            </div>
        </form>
    </>
  )
}

export default Login

import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Signup() {

const navigate = useNavigate();

const [signin, setSignin] = useState({
  user_email:"", user_password:""
});


const handleInput = (e) => {
  const { name, value } = e.target;
  setSignin({...signin, [name]:value});

}
const handleClick = async(e) => {
  e.preventDefault();
  const { user_email, user_password } = signin;
  console.log(user_email, user_password);

  const res = await fetch("http://localhost:8080/signup", {
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

//   if( !user_email || !user_password ) {
//     window.alert( "Please fill all the field");
// }else {
//     window.alert("signup successfully");
//     }

  // if (res.status === 400 || !data) {
  //   window.alert("Upload Fail, User does not exist please login.");
  //   console.log("Upload Fail, User does not exist please login.");
  // }else {
  //   window.alert("sigin successfully");
  //   console.log("signin successfully");
  //   navigate('./createrecipe')
  // }
}                 
  
  return (
        <>
            <form action="/signup" method='POST'>
              {console.log('user',signin )}
               <div className="signupForm">
                  <h1 className='formHeading'>SignUp</h1>
                  <hr />

                  <label for="email"><b>Email</b></label>
                  <input type="text" pattern=".+@globex\.com" placeholder="Enter Email" name="user_email" id="email" value={signin.user_email} onChange={handleInput} required />

                  <label for="psw"><b>Password (8 characters minimum)</b></label>
                  <input type="password" placeholder="Enter Password" name="user_password" id="psw"  minlength="8" value={signin.user_password} onChange={handleInput} required />

                  
                  <hr className='dividerLine' />
                  <p>By creating an account you agree to our <NavLink to="#">Terms & Privacy</NavLink>.</p>

                  <button type="submit" className="signupbtn" onClick={handleClick}>Sign up</button>
            </div>
            
            <div className="container login">
              <p>Don’t have an account? <NavLink to="/login">Log in</NavLink></p>
            </div>
        </form>
        </>
  )
}

export default Signup

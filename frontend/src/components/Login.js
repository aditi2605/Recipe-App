import React from 'react'

function Login() {
  return (
    <>
        <form method='POST'>
            <label for="name">Enter your name: </label>
            <input type="text" name="username" id="username" required />
        </form>
    </>
  )
}

export default Login

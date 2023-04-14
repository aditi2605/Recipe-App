import React from 'react';
import { useState } from 'react';
import {ReactComponent as Brand} from '../images/logo.svg';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Hamburger }from '../images/Hamburger.svg';

function Navbar() {
 
    const [showNavbar, setShowNavbar] = useState(false);
  
    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar)

    }
  return (
      <>
        <nav className='navbar'>
          <div className="container">
            <div className='logo'>
              <Brand />
            </div>
            <div className='menu-icon' onClick={ handleShowNavbar }> <Hamburger/ ></div>
            <div className={`nav-elements ${showNavbar && 'active'}`}>
              <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/signup'>Signup</NavLink></li>
                <li><NavLink to='/login'>Login</NavLink></li>
              </ul>
            </div>
          </div>
        </nav>
    
      </>
  )
}

export default Navbar

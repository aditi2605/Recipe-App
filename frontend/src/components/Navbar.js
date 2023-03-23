import React from 'react';




function Navbar() {
  return (
    <>
    <nav className="navbar">
      <div className="logo"><i className="fa-solid fa-user-chef"></i></div>
      <ul className="nav-links">
         <label className="hamburger">&#9776;</label>
            <div className="menu">
              <li><a href="/">Home</a></li>
              <li><a href="/">About</a></li>
              <li className="services"><a href="/">Recipes</a>
                <ul className="dropdown">
                  <li><a href="/">Salad </a></li>
                  <li><a href="/">Gravy</a></li>
                  <li><a href="/">High Protine</a></li>
                  <li><a href="/">Sweet</a></li>
                </ul>
              </li>
              <li><a href="/">Contact</a></li>
            </div>
     </ul>
 </nav>
</>
)
}

export default Navbar

import React from 'react';




function Navbar() {
  return (
    <>
    <nav className="navbar">
      <div className="nav">
        <h1 className='logo'>®️ecipes</h1>
      </div>
      <div className='nav-links'>
      <ul>
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
     </div>
     <div className='fancyCorner'></div>
 </nav>
</>
)
}

export default Navbar

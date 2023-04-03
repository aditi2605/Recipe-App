import React from 'react'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import RecipePage from '../pages/RecipePage';
import Addrecipe from '../components/Addrecipe';
// import girlCookingLoader from '../images/girlCookingLoader.jpeg'

function Dashboard() {

    const [elementVisible, setElementVisible] = useState(false);
    const [showElement, setShowElement] = useState(false);
    // const [greeting, setGreeting] = useState({
    //     user_name:''
    // });

    // const handleInput = (e) => {
    //     const { name, value } = e.target;
    //     setGreeting({...greeting, [name]:value});
    // }
    const [showNavbar, setShowNavbar] = useState(false);
  
    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar)

    }

    // Loader js
    function closeLoadingScreen(loadingScreen) {
        loadingScreen.style.transitionDuration = ".3s";
        loadingScreen.style.transitionTimingFunction = "cubic-bezier(0,.75,.25,1)";
        loadingScreen.style.opacity = 0;
        loadingScreen.style.borderRadius = "40px";
        loadingScreen.style.transform = "scale(0.75)";
        loadingScreen.style.cursor = "initial";
        setTimeout(() => {
          loadingScreen.parentNode.removeChild(loadingScreen);
        }, 300)
      }
      
      document.body.onload = ()=>{
        let lscreen = document.getElementById("loading-screen");
        setTimeout(()=>{closeLoadingScreen(lscreen)}, 3000); 
      }
    

  return (
        <>
            {/* dashboard loader */}
            {/* <div className="loading-screen" id="loading-screen">
                <div className="spinner-container">
                    <img className='loaderImg' src={girlCookingLoader} alt="girl cooking"/>
                    <div className="spinner"></div>
                </div>
                <p>Loading your dashboard...</p>
            </div> */}
            {/* loader end */}

            <div className="layout">
                <a className="header" onClick={ handleShowNavbar } href="/"><i className="fa fa-bars"></i>
                    <div className="header-user"><i className="fas fa-user-circle icon"></i>Logout! 
                    {/* <span id="userName" onChange={handleInput} name='user_name' value={greeting.user_name}></span> */}
                    </div>
                </a>
            <div className="sidebar">
                    <ul>
                    <li> <NavLink className="sidebar-list-item" to="#"><i className="fas fa-home icon"></i> <em>Dashboard</em></NavLink></li>
                    <button className="sidebar-list-item"  title={elementVisible ? 'Hide Element' : 'Show Element'}
          onClick={() => setElementVisible(!elementVisible)}><i className="fa-solid fa-plus"></i>Create Recipe</button>
                    <button className="sidebar-list-item" title={showElement? 'Hide Element' : 'Show Element'}
          onClick={() => setShowElement(!showElement)}> <i className="fas fa-search icon"></i>Search Recipe</button>
                    {/* <li> <a className="sidebar-list-item" href="#0"> <i className="fas fa-arrow-right-from-bracket icon"></i><em>Logout</em></a>
                    </li> */}
                    </ul>
                </div>


        {/* Dashboard right content */}
        <div className="content"> 
            {/* <!--backend--> */} 
            <div className="heading">
                <h2 className="formHeading">Discover 🧑🏻‍🍳 <b>  The Secret of Good Cooking </b></h2>
            
                <div id="AddRecipe" >{elementVisible ?
                    <Addrecipe />:null }
                 </div>
                <div id="searchRecipe" >{showElement?
                    <RecipePage />:null } 
                 </div>
                 </div>
             <br />
            
        </div> 
            
        </div>
    </>
  )
}

export default Dashboard

import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AllRecipes from '../components/AllRecipes';


function Dashboard() {

    const navigate = useNavigate();

    // Navbar
    const [showNavbar, setShowNavbar] = useState(false);
    
    // Loader js
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      }, []);

    // redirect to addrecipe page
    const handleInput = () => {
        let path = '/createrecipe '; 
        navigate(path);
    } 
    
    const handleInputs = () => {
        let path = '/recipes '; 
        navigate(path);
    }  

  return (
        <>
            {/* dashboard loader */}
                <div className="dashboardContainer">
                    { loading ? (
                    <div className="loader-container"> 
                        <div className="spinner"></div>
                        <p><b> Loading your dashboard... </b></p>
                    </div>
               ) : (
               
                    <div className="layout">
                        <a className="header"  onClick={() => setShowNavbar(!showNavbar)} href="/"><i className="fa fa-bars"></i>
                            <div className="header-user"><i className="fas fa-user-circle icon"></i>Logout!</div>
                        </a>
                        <div className="sidebar" title={showNavbar ? 'Hide Nav' : 'Show Nav'}> 
                            <ul>
                                <button className="sidebar-list-item" ><i className="fa-solid fa-house"></i>Dashboard
                                </button>
                                <button className="sidebar-list-item" onClick={handleInput}><i className="fa-solid fa-plus"></i>Create Recipe
                                </button>
                                <button className="sidebar-list-item"onClick={handleInputs}> <i className="fas fa-search icon"></i>Search Recipe
                                </button>
                            
                            </ul>
                        </div>

                        {/* Dashboard right content */}
  
                         <div className="content"> 
                            <div className="heading">
                                <div id="AddRecipe" >
                                     < AllRecipes /> 
                                </div>    
                            </div>     
                        </div> 
                </div>

            )}             
        </div>
    </>
  )
}

export default Dashboard

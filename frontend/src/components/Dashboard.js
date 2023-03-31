import React from 'react'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import RecipePage from '../pages/RecipePage';
import Addrecipe from '../components/Addrecipe';

function Dashboard() {

    const [elementVisible, setElementVisible] = useState(false);
    const [showElement, setShowElement] = useState(false);
  return (
        <>
                <div className="layout">
                <a className="header" href="/"><i className="fa fa-bars"></i>
                    <div className="header-user"><i className="fas fa-user-circle icon"></i>Logout! <span id="userName"></span></div>
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
                <main className="content">

                    {/* <!--backend--> */}
                    <div className="heading">
                    <h2 className="formHeading">Browse activity</h2>
                    </div>
                    <br />
            <div id="AddRecipe" >{
  elementVisible ?
                <Addrecipe />:null } </div>
                <div id="searchRecipe" >{
  showElement?
                <RecipePage />:null } </div>
            </main>
            
            </div>
        </>
  )
}

export default Dashboard

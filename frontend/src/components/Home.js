import React from 'react'
import { NavLink } from 'react-router-dom'
// import foodbowl from '../images/foodbowl.jpeg'
import vectorImg from '../images/vectorImg.jpeg';

function Home() {
  return (
        <>
            <div className='mainPage'>
                <div className='homeHeading'>
                    <h1 className='heroHeading'>Better Food, Better Mood...</h1>
                    <p className='headingPara'>Recipes provide consistency in the production of menu items. Recipes provide food cost control. Recipes provide knowledge for front of the house staff as a sales tool and to help consumers with dietary concerns and allergies.</p>
                    <button className='explorbtn'><NavLink to="/login">Start exploring</NavLink></button>
                </div>
                <div className='headingImg'>
                    <img className='heroimg' src={vectorImg} alt='foodimg' height= '250px' width= '330px'  />
                </div> 
            </div>
        </>
  )
}

export default Home

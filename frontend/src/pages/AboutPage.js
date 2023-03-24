import React from 'react'
import aboutus from '../images/aboutus.jpg'

function AboutPage() {
  return (
    <>
    <div>
    <div className='about'>
    <h1 className='aboutUs'> About Us</h1>
    </div>   
        <div className='aboutPage'>
                <div className='aboutImg'>
                    <img className='aboutimg' src={aboutus} alt='foodimg' height= '400px' width= '550px'  />
                </div>
                <div className='aboutheading'>
                    <h1 className='heroaboutHeading'>Who we are, what we do?!</h1>
                    <p className='aboutPara'>Recipes provide consistency in the production of menu items. Recipes provide food cost control. Recipes provide knowledge for front of the house staff as a sales tool and to help consumers with dietary concerns and allergies.</p>
                    <button className='explorbtn'>Start exploring</button>
                </div>
        </div>
        </div>
    </>
  )
}

export default AboutPage

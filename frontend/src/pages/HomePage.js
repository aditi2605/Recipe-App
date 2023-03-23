import React from 'react'
import foodbowl from '../images/foodbowl.jpeg'


function HomePage() {
  return (
    <>
    <div className='mainPage'>
      <div className='heading'>
        <h1 className='heroHeading'>Better Food, Better Mood...</h1>
        <p className='headingPara'>Not everybody loves cooking, but once in a blue moon, we always get the urge to jump into the kitchen and whip up something delicious. However, it is hard to keep your culinary game fresh if you lack new ideas and always prepare the same old dish that you inherited from your mum. This is why you need to check out various recipe websites for inspiration. But, how do you know the sites to visit, considering that there are thousands of them out there? This is why we have scoured through the internet and brought you some of the best recipe in our website.</p>
        <button className='explorbtn'>Start exploring</button>
      </div>
      <div className='headingImg'>
        <img className='heroimg' src={foodbowl} alt='foodimg' height= '400px' width= '550px'  />
      </div>
      
      </div>

    </>
  )
}

export default HomePage

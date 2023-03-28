import React from 'react'
// import RecipePage from '../pages/RecipePage'

function Recipe({ title, healthlables,image,ingredients }) {
 
    // const PORT = process.env.PORT || 4000; //backend routing port
  return (
    <>
    <h3>{title}</h3>
      <h5>{healthlables}</h5>
      <img src={image} alt=''/>
      <ul>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
      </>
  )
}

export default Recipe

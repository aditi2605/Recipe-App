import React from 'react'

function Recipe({ title, healthlables,image,ingredients }) {
  return (
    <div>
      <h3>{title}</h3>
      <h5>{healthlables}</h5>
      <img src={image} alt=''/>
      <ul>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
    <hr />
    </div>
  )
}

export default Recipe

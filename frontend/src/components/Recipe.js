import React from 'react'

function Recipe({ title,image,ingredients }) {

  return (
    <>
      <div className='displayRecipe'>
        <h3 className='displayRecipetitle'>{title}</h3>
          <img className="displayRecipeimg" src={image} alt='' height='250px' width='300px'/>
          <ul className='displayRecipeingredients'>
            {ingredients.map(ingredient => (
              <li>{ingredient.text}</li>
            ))}
          </ul>
      </div>
     </>
  )
}

export default Recipe

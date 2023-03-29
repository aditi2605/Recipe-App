import React from 'react'
// import RecipePage from '../pages/RecipePage'

function Recipe({ title,image,ingredients }) {
 
    // const PORT = process.env.PORT || 4000; //backend routing port
  return (
    <>
      <div className='displayRecipe'>
        <h3 className='displayRecipetitle'>{title}</h3>
          {/* <h5 className='displayRecipelable'>{healthlables}</h5> */}
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

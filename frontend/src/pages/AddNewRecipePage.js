import React from 'react'

function AddNewRecipePage() {
  return (
      <>
        <form action="" method='POST'>
               <div className="addRecipeForm">
                  <h1 className='formHeading'>Add a Recipe</h1>
                  <p className='formAlert'>Please Fill in This Form to Create a new Recipe.</p>
                  <hr />

                  <label for="Username"><b>Username</b></label>
                  <input type="text" placeholder="Enter Your Name" name="name" id="userName" required />


                  <label for="email"><b>Email</b></label>
                  <input type="text" pattern=".+@globex\.com" placeholder="Enter Email" name="email" id="email" required />

                  <label for="psw"><b>Password</b></label>
                  <input type="password" placeholder="Enter Password" name="psw" id="psw"  minlength="8" required />

                  <label for="recipename"><b>Recipe Title</b></label>
                  <input type="text" placeholder="Enter recipe title" name="recipename" id="recipename" required />

                  <label for="recipeimg"><b>Select a Recipe Image</b></label>
                  <input type="file" id="imgfile" name="imgfile"/>  

                  <label for="subject"><b>Add Recipe Ingredients</b></label>
                  <textarea id="recipeingredients" name="recipeingredients" placeholder="Write something.."  ></textarea>  

                  <button type="submit" className="addRecipe">Add</button>
              </div>
        </form>
      </>
  )
}

export default AddNewRecipePage

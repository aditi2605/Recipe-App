import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'

function Addrecipe() {
    const navigate = useNavigate();

    const [recipe, setRecipe] = useState({
        user_name:"", user_email:"", recipe_title:"", recipe_image:"", recipe_ingridients:""
      });

      let name, value ;
      const handleInputs = (e) => {
          console.log(e);
          name = e.target.name;
          value = e.target.value;
    
          setRecipe({...recipe, [name]:value});
      }

      let addingRecipe = async(e) => {
        e.preventDefault();
    
        const {  user_name, user_email, recipe_title, recipe_image, recipe_ingridients } = recipe;
    
        const res = await fetch("localhost:8080/createrecipe", {
          method: 'POST',
          headers: {
            "content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body:JSON.stringify({
            user_name, user_email, recipe_title, recipe_image, recipe_ingridients
          })
        });
    
        const recipeData = await res.json();
        console.log(res);
    
        if(res.status === 422 || !recipeData) {
          window.alert("Upload Fail");
          console.log("Upload  Fail");
        }else {
          window.alert("Recipe added Successfull");
          console.log("Recipe added Successfull");
          navigate('./createrecipe')
        }

  return (
        <>
            <form method='POST'>
               <div className="addRecipeForm">
                  <h1 className='formHeading'>Add a Recipe</h1>
                  <p className='formAlert'>Please Fill in This Form to Create a new Recipe.</p>
                  <hr />

                  <label for="Username"><b>Username</b></label>
                  <input type="text" placeholder="Enter Your Name" name="user_name" id="userName" value={recipe.user_name} onChange={handleInputs} required />

                  <label for="email"><b>Email</b></label>
                  <input type="email"  placeholder="Enter Email" name="user_email" id="email" value={recipe.user_email} onChange={handleInputs}required />

                  <label for="recipename"><b>Recipe Title</b></label>
                  <input type="text" placeholder="Enter recipe title" name="recipe_title" id="recipename" value={recipe.recipe_title} onChange={handleInputs} required />

                  <label for="recipeimg"><b>Select a Recipe Image</b></label>
                  <input type="file" id="imgfile" name="recipe_image" value={recipe.recipe_image} onChange={handleInputs}/>  

                  <label for="subject"><b>Add Recipe Ingredients</b></label>
                  <textarea id="recipeingredients" name="recipe_ingridients" placeholder="Write something.." value={recipe.recipe_ingridients} onChange={handleInputs} ></textarea>  

                  <button type="submit" className="addRecipe" onClick={addingRecipe}>Add</button>
              </div>
               <div className="container login">
                    <p>Don’t have an account? <NavLink to="/login">Log in</NavLink></p>
                </div>
            </form>
        </>
  )}
}

export default Addrecipe

import React from 'react'
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';




function AllRecipes() {

    const [recipes, setRecipes] = useState([])  

 const handleInputs = (e) => {
        e.preventDefault();
        // const { user_email, recipe_title, recipe_image, recipe_ingredients } = recipes;
        const { name, value } = e.target
        setRecipes({...recipes, [name]:value});
}
const getAllRecipes = async() => {
  const res = await fetch("http://localhost:8080/dashboard", {
  method:'GET',
  mode:'cors',
  headers: {
      "content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
  } 
});
console.log(res);  
const data = await res.json();
console.log(data.recipes);
return setRecipes(data.recipes);

};        
      useEffect( () => {
          getAllRecipes()
      },[])

      const deleteRecipe = async(id) => {
        const response = await fetch(`http://localhost:8080/deleterecipe/${id}`, {
            method:'DELETE',
            mode:'cors',
            headers: {
                // 'Access-Control-Allow-Credentials' : true,
                "content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            } 
          });
          console.log(response);  
          const deletedata = await response.json();
          console.log(deletedata);

          if(response.status === 404 || !deletedata){
            alert("error")
          }else {
            alert("Recipe deleted successfully")
            getAllRecipes()
          }

      }

    
  return (
    <>

      { 
        recipes && recipes?.map && recipes?.map((recipes, i)  => {
              return (
                          <div className="displayRecipe" key={i}>
                            <h5 className='displayRecipetitle'>{recipes.user_email}</h5>
                            <h3 className='displayRecipetitle'>{recipes.recipe_title}</h3> 
                            <img className="displayRecipeimg" src="" alt='Recipe_Image' height='250px' width='300px' onLoad={handleInputs} />
                            <ul className='displayRecipeingredients'>
                              <li><b>Recipe Ingredients</b></li>
                              <li>{recipes.recipe_ingridients}</li>   
                            </ul>
                            <NavLink to={`/updaterecipe/${recipes._id}`}><button className='editbtn'>Edit</button></NavLink>
                            <button className='dltbtn' onClick={() => deleteRecipe(recipes._id)}>Delete</button> 
                          </div>
                            
                      )
                    })
      }

           
         
    </>
  )
}

export default AllRecipes 
import React from 'react'
import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Dashboard from '../components/Dashboard.js';


function AllRecipes() {
    const [recipes, setRecipes] = useState([])


 const handleInputs = (e) => {
        e.preventDefault();
        // const { user_email, recipe_title, recipe_image, recipe_ingredients } = recipes;
        const { name, value } = e.target
        setRecipes({...recipes, [name]:value});
}


         
      useEffect( () => {
        const getAllRecipes = async() => {
            const res = await fetch("http://localhost:8080/dashboard", {
            method:'GET',
            mode:'cors',
            headers: {
                // 'Access-Control-Allow-Credentials' : true,
                "content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            } 
          });
          console.log(res);  
          const data = await res.json();
          console.log(data.recipes);
          return setRecipes(data.recipes);
          
        };
        getAllRecipes()
      },[])

      
    //   console.log(recipes)

  return (
   <>
  


{ 
  recipes && recipes.map((recipes, i)  => {
    return (
    <div key={i}>
             <h5 className='displayRecipetitle'>{recipes.user_email}</h5>
                            <h3 className='displayRecipetitle'>{recipes.recipe_title}</h3>  
                            <img className="displayRecipeimg" src={recipes.recipe_image} alt='' height='250px' width='300px' onLoad={handleInputs} />
                            <ul className='displayRecipeingredients'  >
                            {recipes.recipe_ingredients}
                                <li >{recipes.recipe_ingredients}</li>
                             
                            </ul>
                            <button className='editbtn' >Edit</button>
                            <button className='dltbtn'>Delete</button> 
                            </div>
    )
                        })
                    }

           
         
   </>
  )
}

export default AllRecipes 
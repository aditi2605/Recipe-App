// import React from 'react'
// import { useState } from 'react'

// function Updaterecipe({ recipe_title,recipe_image,recipe_ingredients }) {

//   const [recipe, setRecipe] = useState({
//     user_name:""
//   });

//   let name, value ;
//   const updateSearch = (e) => {
//       console.log(e);
//       name = e.target.name;
//       value = e.target.value;

//       setRecipe({...recipe, [name]:value});
//   }

//   const getUserRecipe = async(e) => {
//       e.preventDefault();
//       const {  user_name } = recipe;
      
//       const res = await fetch("http://localhost:8080/userdata", {
//         method: 'GET',
//         mode:'cors',
//         headers: {
//           "content-Type": "application/json",
//           "Access-Control-Allow-Origin": "*",
//         },
//         body:JSON.stringify({
//           user_name
//         })
//       });
//       console.log(res);
//       const recipeData = await res.send({
//       status:"ok", data: recipeData});
//       console.log(recipeData.hits);
//       setRecipe(recipeData.hits)

//       if(res.status === 404 || !recipeData) {
//       window.alert("recipe not found");
//       console.log("recipe not found");
//       }else {
//         window.alert(user_name)
//         console.log(res)
//       }
// }
//   return (
//     <>
//         <form method='POST' className='recipeSearchForm'>
//             <input className='search-bar' placeholder='Username' name='user_name' type='text' value={recipe.user_name} onChange={updateSearch}/>
//             <button className='search-button' type='submit' onClick={ getUserRecipe } >Search</button>
//         </form>
//           {/* {Updaterecipe.map(Updaterecipe => (
//             <Updaterecipe title={recipe_title}
//             image={recipe_image}
//             ingredients={recipe_ingredients} 
//             />
//           ))} */}

//          <div className='displayRecipe'> 
//         <h3 className='displayRecipetitle'>{recipe_title}</h3>
//         <img className="displayRecipeimg" src={recipe_image} alt='' height='250px' width='300px'/>
//           <ul className='displayRecipeingredients'>
//             <li>{recipe_ingredients}</li>
//             {/* {recipe_ingredients.map(recipe_ingredients => (
//               <li>{recipe_ingredients.text}</li>
//             ))} */}
//           </ul>
//       </div> 
//     </>
//   )
// }

// export default Updaterecipe

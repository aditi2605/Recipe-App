import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'

function Addrecipe() {
    const navigate = useNavigate();

     // redirect to dashboard page
     const handleInput = () => {
      let path = '/dashboard '; 
      navigate(path);
  } 
  
  const searchRecipe = () => {
      let path = '/recipes '; 
      navigate(path);
  }  

    // Navbar
    const [showNavbar, setShowNavbar] = useState(false);
  
   
    // Loader js
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      }, []);

    // add recipe
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

      const addingRecipe = async(e) => {
          e.preventDefault();
          const {  user_email, recipe_title, recipe_image, recipe_ingridients } = recipe;
          
          const res = await fetch("http://localhost:8080/createrecipe", {
            method: 'POST',
            mode:'cors',
            headers: {
              "content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            body:JSON.stringify({
               user_email, recipe_title, recipe_image, recipe_ingridients
            })
          });
          console.log(res);
          const recipeData = await res.json();
          console.log(recipeData);
    
          if(res.status === 422 || !recipeData) {
          window.alert("Upload Fail.");
          console.log("Upload  Fail");
          }else {
            window.alert("Recipe added Successfull");
            let path = '/dashboard'; 
            navigate(path);
            console.log("Recipe added Successfull");
          }
    }

  return (
        <>

           {/* dashboard loader */}
            
           <div className="dashboardContainer">
                { loading ? (
                    <div className="loader-container"> 
                        <div className="spinner"></div>
                        <p><b> Loading your dashboard... </b></p>
                    </div>
               ) : (
               
                <div className="layout">
                        <a className="header"  onClick={() => setShowNavbar(!showNavbar)} href="/"><i className="fa fa-bars"></i>
                    <div className="header-user"><i className="fas fa-user-circle icon"></i>Logout! 
                    {/* <span id="userName" onChange={handleInput} name='user_name' value={greeting.user_name}></span> */}
                    </div>
                </a>
                <div className="sidebar" title={showNavbar ? 'Hide Nav' : 'Show Nav'}> 
                    <ul>
                            <button className="sidebar-list-item" onClick={handleInput}  ><i className="fa-solid fa-house"></i>Dashboard
                            </button>
                            <button className="sidebar-list-item" ><i className="fa-solid fa-plus"></i>Create Recipe
                            </button>
                            <button className="sidebar-list-item" onClick={searchRecipe}> <i className="fas fa-search icon"></i>Search Recipe
                            </button>
                            {/* <li> <a className="sidebar-list-item" href="#0"> <i className="fas fa-arrow-right-from-bracket icon"></i><em>Logout</em></a>
                            </li> */}
                        </ul>
                </div>

                {/* Dashboard right content */}
                
             
                <div className="content">
                    <div className="heading">
                        <form method='POST'>
                          <div className="addRecipeForm">
                              <h1 className='formHeading'>Add a Recipe</h1>
                              <p className='formAlert'>Please Fill in This Form to Create a new Recipe.</p>
                              <hr />
                            <label for="email"><b>Email</b></label>
                            <input type="email"  placeholder="Enter Email" name="user_email" id="email" value={recipe.user_email} onChange={handleInputs}required />

                            <label for="recipename"><b>Recipe Title</b></label>
                            <input type="text" placeholder="Enter recipe title" name="recipe_title" id="recipename" value={recipe.recipe_title} onChange={handleInputs} required />

                            <label for="recipeimg"><b>Select a Recipe Image</b></label>
                            <input type="text" placeholder="Enter image URL" id="imgfile" name="recipe_image" value={recipe.recipe_image} onChange={handleInputs}/>  

                            <label for="subject"><b>Add Recipe Ingredients</b></label>
                            <input type="text" id="recipeingredients" name="recipe_ingridients" placeholder="Write something.." value={recipe.recipe_ingridients} onChange={handleInputs} /> 

                            <button type="submit" className="addRecipe" onClick={addingRecipe}>Add</button>
                          </div>
                          <div className="container login">
                                <p>Don’t have an account? <NavLink to="/login">Log in</NavLink></p>
                          </div>
                        </form>     
                      </div>     
                    </div> 
                </div>
              )}             
            </div>
          </>
  
)}

export default Addrecipe

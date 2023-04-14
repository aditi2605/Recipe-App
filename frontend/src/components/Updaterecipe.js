import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function Updaterecipe() {

  const navigate = useNavigate();
    

     // redirect to dashboard page
     const handleInput = () => {
      let path = '/dashboard '; 
      navigate(path);
  } 
   // redirect to search recipe page
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


    //edit recipe


     const [inputs, setInputs]= useState({
      user_email:"", recipe_title:"", recipe_image:"", recipe_ingridients:""
     });

     const setRecipe = (e) => {
      console.log(e.target.value);
      const{name, value}= e.target;
      setInputs((inputs) => ({...inputs,[name]:value}))
     }

     const _id  = useParams("").id;
     console.log(`this is user id ${_id}`)

     const getRecipe = async() => {
        const res = await fetch(`http://localhost:8080/updaterecipe/${_id}`, {
              method: 'GET',
              mode:'cors',
              headers: {
                "content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
              }
            });
            const data = await res.json();
            console.log(data)

            if(res.status === 422 || !data) {
              console.log("error")
            }else{
              setInputs(data)
              console.log("get the recipe")
            }
     }

     useEffect(() => {

        getRecipe()
        
     }, [])
   
   const updateRecipe = async(e) => {
      e.preventDefault();

      const { user_email, recipe_title, recipe_image, recipe_ingridients } = inputs;

      const response = await fetch(`http://localhost:8080/updaterecipe/${_id}`, {
        method: 'PUT',
        mode:'cors',
        headers: {
          "content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body:JSON.stringify({
          user_email, recipe_title, recipe_image, recipe_ingridients
        })
      });
      const updatedData = await response.json();
      console.log(updatedData)
      
      if(response.status === 422 || !updatedData){
        alert("Recipe not updated")
      }else{
        alert("Recipe updated successfully")
        let path = '/dashboard'; 
        navigate(path);
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
                    {/* <!--backend--> */} 
                    <div className="heading">
                    <form method='POST'>
               <div className="addRecipeForm">
                  <h1 className='formHeading'>Edit a Recipe</h1>
                  <hr />

                  <label for="email"><b>Email</b></label>
                  <input type="email"  placeholder="Enter Email" name="user_email" id="email" value={inputs.user_email} onChange={setRecipe} required />

                  <label for="recipename"><b>Recipe Title</b></label>
                  <input type="text" placeholder="Enter recipe title" name="recipe_title" id="recipename" value={inputs.recipe_title} onChange={setRecipe} required />

                  <label for="recipeimg"><b>Select a Recipe Image</b></label>
                  <input type="text" id="imgfile" name="recipe_image" value={inputs.recipe_image} onChange={setRecipe} />  

                  <label for="subject"><b>Add Recipe Ingredients</b></label>
                  <textarea id="recipeingredients" name="recipe_ingridients" placeholder="Write something.." value={inputs.recipe_ingridients} onChange={setRecipe}  ></textarea>  
                  <button type="submit" className="addRecipe" onClick={updateRecipe} >Edit</button>
              </div>
              
            </form>
                        
                    </div>     
                </div> 
            </div>

                
            
                )}             
            </div>
    </>
  )
}

export default Updaterecipe

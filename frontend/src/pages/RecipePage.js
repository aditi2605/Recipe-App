import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Recipe from '../components/Recipe';


function RecipePage() {
  const navigate = useNavigate();

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

  // redirect to addrecipe page
  const handleInput = () => {
      let path = '/createrecipe '; 
      navigate(path);
  } 
  
  const handleInputs = () => {
      let path = '/dashboard '; 
      navigate(path);
  }  


  // search recipes
  const APP_ID = "85b5b9d5";
  const APP_KEY = "cc2a61eb50ae063e203c421f27e4524d";

  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  useEffect( () => {
    const getRecipes = async () => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
      const data =  await response.json('');
      setRecipe(data.hits);
    };
    getRecipes();
  }, [query]);

 
  const updateSearch = (e) => {
      setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };
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
                            <button className="sidebar-list-item" onClick={handleInputs} ><i className="fa-solid fa-house"></i>Dashboard
                            </button>
                            <button className="sidebar-list-item" onClick={handleInput}><i className="fa-solid fa-plus"></i>Create Recipe
                            </button>
                            <button className="sidebar-list-item"> <i className="fas fa-search icon"></i>Search Recipe
                            </button>
                            {/* <li> <a className="sidebar-list-item" href="#0"> <i className="fas fa-arrow-right-from-bracket icon"></i><em>Logout</em></a>
                            </li> */}
                        </ul>
                </div>

                {/* Dashboard right content */}
                
             
                <div className="content"> 
                    {/* <!--backend--> */} 
                    <div className="heading">
                       {/* recipe search section */}
                            <form onSubmit={getSearch} className='searchForm'>
                              <input className='search-bar' type='text' value={search} onChange={updateSearch}/>
                              <button className='search-button' type='submit'>Search</button>
                            </form>
                          {recipe.map(recipe => (
                              <Recipe title={recipe.recipe.label}
                              image={recipe.recipe.image}
                              ingredients={recipe.recipe.ingredients} 
                              />
                            ))} 
                    </div>     
                </div> 
            </div>

     )}             
            </div>
           












        
       

    </>
  )
}

export default RecipePage

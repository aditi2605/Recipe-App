import React from 'react'
// import aboutus from '../images/aboutus.jpg'
import { useEffect, useState } from 'react';
import Recipe from '../components/Recipe';


function RecipePage() {
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


  // const randomDish = ['salad', 'chat', 'pav bhaji','biryani', 'samosa', 'noodles'] ;
    
  
    

 
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

          {/* <div className="textAnimationContainer"> */}
              {/* <p className='txtanihead'>Discover 🧑🏻‍🍳</p> */}
              {/* <section className="animation">
                <div className="first"><div className='aniOne'>Your Inner Gourmand.</div></div>
                <div className="second"><div className='aniTwo'>The Secret of Good Cooking.</div></div>
                <div className="third"><div className='aniThree'>The Most Exquisite Flavors.</div></div>
                {/* <div className="fourth"><div className='anifour'>The Art Of Cooking.</div></div> */}
              {/* </section>  */}
          {/* </div> */}
        {/* recipe search section */}
        <form onSubmit={getSearch} className='searchForm'>
            <input className='search-bar' type='text' value={search} onChange={updateSearch}/>
            <button className='search-button' type='submit'>Search</button>
        </form>
          {recipe.map(recipe => (
            <Recipe title={recipe.recipe.label}
            healthlables={recipe.recipe.healthLables}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients} 
            />
          ))}
  


        {/* <div>
        <div classNameName='about'>
        <h1 classNameName='aboutUs'> About Us</h1>
        </div>   
            <div classNameName='aboutPage'>
                    <div classNameName='aboutImg'>
                        <img classNameName='aboutimg' src={aboutus} alt='foodimg' height= '400px' width= '550px'  />
                    </div>
                    <div classNameName='aboutheading'>
                        <h1 classNameName='heroaboutHeading'>Who we are, what we do?!</h1>
                        <p classNameName='aboutPara'>Recipes provide consistency in the production of menu items. Recipes provide food cost control. Recipes provide knowledge for front of the house staff as a sales tool and to help consumers with dietary concerns and allergies.</p>
                        <button classNameName='explorbtn'>Start exploring</button>
                    </div>
            </div>
            </div> */}
    </>
  )
}

export default RecipePage

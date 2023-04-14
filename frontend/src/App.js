// new code
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import RecipePage from './pages/RecipePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignUpPage';
import AddNewRecipePage from './pages/AddNewRecipePage';
import DashboardPage from './pages/DashBoardPage';
import Updaterecipe from './components/Updaterecipe';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/recipes" element={<RecipePage/>}/>
          <Route path="/createrecipe" element={<AddNewRecipePage />}/>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/signup" element={<SignupPage />}/> 
          <Route path="/dashboard" element={<DashboardPage />}/> 
          <Route path="/updaterecipe/:id" element={<Updaterecipe />}/>
          <Route path="/dashboard/:id" element={<DashboardPage />}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App




// old code

// import './App.css';
// import HomePage from './views/HomePage';
// import AboutPage from './views/AboutPage';
// import React, {useEffect, useState} from 'react';
// import Recipe from './components/Recipe';
// import Navbar from './components/Navbar';
// import { useEffect, useState } from 'react';
// import HomePage from './pages/HomePage';
// import Footer from './components/Footer';
// import AboutPage from './pages/AboutPage';
// import TrendingRecipes from './components/TrendingRecipes';
// import Carousel from './components/Carousel';


// function App() {
//   const APP_ID = "85b5b9d5";
//  const APP_KEY = "cc2a61eb50ae063e203c421f27e4524d";

//  const [recipe, setRecipe] = useState([]);
//  const [search, setSearch] = useState('');
//  const [query, setQuery] = useState('');


//  useEffect( () => {
//   getRecipes()
//  }, [query]);

// const randomDish = ['salad', 'chat', 'pav bhaji','biryani', 'samosa', 'noodles'] ;
    
  
//  const getRecipes = async () => {
//     const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
//     const data =  await response.json('');    
//      setRecipe(data.hits);
//   };
  
//  const updateSearch = (e) => {     
//   setSearch(e.target.value); 
// };
//  const getSearch = (e) => {
//   e.preventDefault();
//   setQuery(search);
//   setSearch(''); };

// const PORT = process.env.PORT || 4000; //backend routing port

//   return (
//     <div className="App">
//       <Navbar />
    

//       <form onSubmit={getSearch} className='searchForm'>

//         <input className='search-bar' type='text' value={search} onChange={updateSearch} />

//         <button className='search-button' type='submit'>Search</button>

//       </form>

//       {recipe.map(recipe => (
//         <recipe title={recipe.recipe.label}
//         healthlables={recipe.recipe.healthLables}
//         image={recipe.recipe.image}
//         ingredients={recipe.recipe.ingredients} 
//       />
//       ))} 
//      </div>
//   );
//    }

// export default App;

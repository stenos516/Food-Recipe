import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RecipeCard from '../components/RecipeCard';
import SearchBar from '../components/SearchBar'; 
import '../App.css'; 

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchRecipes('fish'); 

    
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  const fetchRecipes = async (query) => {
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      setRecipes(response.data.meals);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchRecipes(searchTerm);
  };

  const addToFavorites = (recipeId) => {
    const updatedFavorites = [...favorites, recipeId];
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const removeToFavorites = (recipeId) => {
const updatedFavorites = favorites.filter((fav) => fav.idMeal !== recipeId);
setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div>
      
      <SearchBar 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        handleSearch={handleSearch} 
      />
      
      <h2 className='Title'>Recipes</h2>
      <div className="recipe-list">
        {recipes && recipes.map((recipe) => {
          const isAlreadyFavorite = favorites.some(fav => fav.idMeal === recipe.idMeal);
          return (
            <RecipeCard 
              key={recipe.idMeal}
              recipe={recipe}
              addToFavorites={addToFavorites}
              isFavorite={isAlreadyFavorite}
            removeFromFavorites={removeToFavorites}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;

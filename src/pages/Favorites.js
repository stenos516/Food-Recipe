import React, { useState, useEffect } from 'react';
import RecipeCard from '../components/RecipeCard';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  const removeFromFavorites = (recipeId) => {
    const updatedFavorites = favorites.filter(recipe => recipe.idMeal !== recipeId);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div>
      <h1 className='title-favorite-recipes'>Your Favorite Recipes</h1>
      <div className="recipe-list">
        {favorites.length > 0 ? (
          favorites.map((recipe) => (
            <RecipeCard 
              key={recipe.idMeal} 
              recipe={recipe} 
              isFavorite 
              removeFromFavorites={removeFromFavorites} 
            />
          ))
        ) : (
          <p>No favorite recipes added yet.</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;

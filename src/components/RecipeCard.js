import React from 'react';
import { Link } from 'react-router-dom';

const truncateRecipeName = (name) => {
  if (name.length > 20) {
    return name.substring(0, 20) + '...'; 
  }
  return name;
};

const RecipeCard = ({ recipe, addToFavorites, removeFromFavorites, isFavorite }) => (
  <div className="recipe-card">
    
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
    
    <h3>{truncateRecipeName(recipe.strMeal)}</h3>
    <Link to={`/recipe/${recipe.idMeal}`} className='view-details'>View Details</Link>
    {isFavorite ? (
      <button onClick={() => removeFromFavorites(recipe.idMeal)}>
        Remove from Favorites
      </button>
    ) : (
      <button onClick={() => addToFavorites(recipe)}>Add to Favorites</button>
    )}
  </div>
);

export default RecipeCard;

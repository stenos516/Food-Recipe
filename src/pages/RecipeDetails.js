import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        setRecipe(response.data.meals[0]);
      } catch (error) {
        console.error('Error fetching recipe details:', error);
      }
    };

    fetchRecipeDetails();
  }, [id]);

  const getIngredients = () => {
    if (!recipe) return [];
    
    const ingredients = [];
    for (let i = 1; i <= 25; i++) {
      const ingredient = recipe[`strIngredient${i}`];
      const measure = recipe[`strMeasure${i}`];
      if (ingredient) {
        ingredients.push({ ingredient, measure });
      }
    }
    return ingredients;
  };

  if (!recipe) {
    return <p>Loading...</p>;
  }

  return (
    <div className='recipe-details'>
      <h1 className='title-recipe'>{recipe.strMeal}</h1>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <p>{recipe.strInstructions}</p>
      <div className='Ingredients'>
      <h2>Ingredients</h2>
      <ul>
        {getIngredients().map((item, index) => (
          <li key={index}>
            {item.ingredient} - {item.measure}
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default RecipeDetails;

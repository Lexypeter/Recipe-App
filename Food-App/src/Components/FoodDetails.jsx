import React, { useEffect, useState } from 'react';
import styles from "./foodDetails.module.css"
import Ingredients from "./Ingredients"

const FoodDetails = ({ foodId }) => {
  const apiKey = "0da0722349054214beb02fc533505c57";
  const url = `https://api.spoonacular.com/recipes/${foodId}/information`;
  
  const [food, setFood] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${url}?apiKey=${apiKey}`);
        const data = await res.json();
        console.log(data);
        
        setFood(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [foodId]); // Re-run effect when foodId changes

  if (isLoading) return <p>Loading...</p>;
  if (!food) return <p>Failed to load food details.</p>;

  return (
    <div>
      < div className={styles.recipeCard}>
      <h1 className={styles.recipeName}>{food.title}</h1>
      <img src={food.image} alt={food.title} className={styles.recipeImage}/>
      
      <div className={styles.recipeDetails}>
        <span><strong>⏰ {food.readyInMinutes} Minutes</strong></span>
        <span><strong>👪 Serves {food.servings}</strong></span>
        <span> <strong>{food.vegetarian ? "🥕 Vegetarian" : "🍖 Non-Vegetarian"}</strong></span>
        <span><strong>{food.vegan ? "🌱 Vegan" : ""}</strong></span>
      </div>

      <div>💰 <span><strong>${food.pricePerServing}</strong></span>
      </div>
      <Ingredients food={food} isLoading = {isLoading} key={Math.random()}/>
        <h2>Instructions</h2>
        <div className={styles.recipeInstructions}>
        {food.analyzedInstructions?.length > 0 && food.analyzedInstructions[0]?.steps?.length > 0 ? (
          <ol>
            {food.analyzedInstructions[0].steps.map((step, index) => (
              <li key={index}>{step.step}</li>
            ))}
          </ol>
        ) : (
          <p>No instructions available.</p>
        )}
        </div>
      </div>
    </div>
    
  );
};

export default FoodDetails;

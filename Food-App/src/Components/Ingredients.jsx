import React from "react";
import Item from "./Item";

const Ingredients = ({food,  isLoading }) => {
  return (
    <div>
      <h2>Ingredients</h2>{isLoading
       ? "Loading...." : food.extendedIngredients.map((item) => (
       <Item item = {item} key = {Math.random()}/>
      ))}
      
    </div>
  );
};

export default Ingredients;

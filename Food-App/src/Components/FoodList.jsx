import React from "react"
import FoodItems from "./FoodItems";


const FoodList = ({foodData, setFoodId}) => {
  return (
    <div>
    {foodData.map((food)=>(
      <FoodItems  food={food} key={food.id} setFoodId={setFoodId}/>
    ))}
    </div>
  );
};

export default FoodList;

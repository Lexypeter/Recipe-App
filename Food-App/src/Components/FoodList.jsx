import React from "react"
import FoodItems from "./FoodItems";
import styles from "./foodList.module.css"


const FoodList = ({foodData, setFoodId}) => {
  return (
    <div className={styles.foodWrapper} >
    {foodData.map((food)=>(
      <FoodItems  food={food} key={food.id} setFoodId={setFoodId}/>
    ))}
    </div>
  );
};

export default FoodList;

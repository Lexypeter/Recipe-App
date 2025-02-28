import React from "react";
import styles from "./foodItems.module.css"

const FoodItems = ({ food , setFoodId}) => {
  
  return (
    <div className={styles.foodContainer}>
      <img src={food.image} alt="Food items Image"   className={styles.image}/>
      <div className={styles.item}> <p className={styles.title}>{food.title}</p></div>
    <div className={styles.buttondiv}> <button  className={styles.button} onClick={()=>{setFoodId(food.id)}}>view Recipe</button></div>
     
    </div>
  );
};

export default FoodItems;

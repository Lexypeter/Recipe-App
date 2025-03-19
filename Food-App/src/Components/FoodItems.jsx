import React from "react";
import styles from "./foodItems.module.css";

const FoodItems = ({ food, setFoodId }) => {
  return (
    <div className={styles.parentContainer}>
      <div className={styles.foodContainer}>
        <div className={styles.firstContainer}>
          <img
            src={food.image}
            alt="Food items Image"
            className={styles.image}
          />
        </div>
        <div className={styles.secondContainer}>
          <div className={styles.item}>
            <p className={styles.title}>{food.title}</p>
          </div>
          <div className={styles.buttondiv}>
            <button
              className={styles.button}
              onClick={() => {
                setFoodId(food.id);
              }}
            >
              view Recipe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItems;

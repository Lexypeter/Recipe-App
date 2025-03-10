import React, { useEffect, useState } from "react";
const urls = "https://api.spoonacular.com/recipes/complexSearch";
const apiKey = "0da0722349054214beb02fc533505c57";
import styles from "./search.module.css"
const Search = ({ foodData, setFoodData }) => {
  const [querry, setQuerry] = useState("");
  useEffect(() => {
    const fetchSearch = async ()=> {
      try {
        const res = await fetch(`${urls}?query=${querry}&apiKey=${apiKey}`);
        if (!res.ok) throw new Error("Failed to fetch data");
        const data = await res.json();
        setFoodData(data.results);
      } catch (error) {
    console.log("Error was found", error);
    
      }
    }
    fetchSearch()
  }, [querry]);
  
  return (
    <div className={styles.searchContainer}>
      <input className={styles.input}
        type="text" placeholder="Search Recipes"
        value={querry}
        onChange={(e) => {
          setQuerry(e.target.value);
        }}
      />
    </div>
  );
};

export default Search;

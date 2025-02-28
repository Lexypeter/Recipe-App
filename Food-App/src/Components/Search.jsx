import React, { useEffect, useState } from "react";
const urls = "https://api.spoonacular.com/recipes/complexSearch";
const apiKey = "0da0722349054214beb02fc533505c57";
import styles from "./search.module.css"
const Search = ({ foodData, setFoodData }) => {
  const [querry, setQuerry] = useState("");
  useEffect(() => {
    if (!querry) return; // Prevents API calls on empty query
  
    const controller = new AbortController();
    const signal = controller.signal;
  
    const debounceTimer = setTimeout(async () => {
      try {
        const res = await fetch(`${urls}?query=${querry}&apiKey=${apiKey}`, { signal });
        if (!res.ok) throw new Error("Failed to fetch data");
        const data = await res.json();
        setFoodData(data.results);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("API Fetch Error:", error);
        }
      }
    }, 500); 
  
    return () => {
      clearTimeout(debounceTimer); 
      controller.abort(); 
    };
  }, [querry]);
  
  return (
    <div className={styles.searchContainer}>
      <input className={styles.input}
        type="text"
        value={querry}
        onChange={(e) => {
          setQuerry(e.target.value);
        }}
      />
    </div>
  );
};

export default Search;

import React from "react";
import { useState } from "react";
import axios from "axios";
import "../Components/recipes.css";

export default function Recipes() {
  //const ID = "69a18d4d";
 // const key = "b6c43c1a68477238e12876004aadd9f7";

  const [query, setQuery] = useState("");
  const [recipes, setRecipe] = useState([]);

  //const url = {`/search?q=${query}&app_id=${ID}&app_key=${key}`}

  const url = `https://api.edamam.com/api/food-database/v2/parser?app_id=69a18d4d&app_key=e249ff40bcb91bccb6236e30eb06f5d9&ingr=${query}&nutrition-type=cooking`;

  async function getRecipes() {
    try {
      const result = await axios.get(url, {
        mode: "no-cors",
        credentials: "include",
      });
      console.log(result)
 
      setRecipe(result.data.hints);
      console.log(result.data.hints.food);
    } catch (e) {
      console.log(e);
    }

    console.log(recipes);
  }
  const submit = (e) => {
    e.preventDefault();
    getRecipes();
  };
console.log(recipes)

  // button for dark-Mode

  const [isBlack, setIsBlack] = useState(true);

  const backgroundColor = isBlack ? "white" : "black";

  const toggleBackground = () => {
    setIsBlack(!isBlack);
  };

  return (
    <div style={{ backgroundColor }}>
      <h1>Custom Search</h1>
      <button className="dark" onClick={toggleBackground}>
        Dark Mode
      </button>
      <form onSubmit={submit}>
        <input
          type="text"
          placeholder="search Recipe"
          value={query}
          style={{
            padding: "13px",
            width: "30rem",
            border: "none",
            fontSize: "22px",
            fontFamily: "sans-serif",
            fontWeight: "20px",
          }}
          onChange={(e) => setQuery(e.target.value)}
          className="input"
        />

        <button className="search" type="submit">
          Search
        </button>
      </form>

    
      {recipes.map(recipe => {
  return (
    <div  className= 'recipes' key={recipe.food.label}>
      <img src={recipe.food.image} alt="food" />
      {recipe.label}
      {recipe.nutrients}
      
      
    </div>
  );
})} 
    </div>
  );
}

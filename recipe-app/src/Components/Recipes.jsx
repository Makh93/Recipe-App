import React from "react";
import { useState } from "react";
import axios from "axios";
import "../Components/recipes.css";
import { Fade} from "react-awesome-reveal";
export default function Recipes() {
  //const ID = "69a18d4d";
 // const key = "b6c43c1a68477238e12876004aadd9f7";

  const [query, setQuery] = useState("");
  const [recipes, setRecipe] = useState([]);

  //const url = {`/search?q=${query}&app_id=${ID}&app_key=${key}`}

  //const url = `https://api.edamam.com/api/food-database/v2/parser?app_id=69a18d4d&app_key=e249ff40bcb91bccb6236e30eb06f5d9&ingr=${query}&nutrition-type=cooking`;
  const options = {
    method: 'GET',
    url: `https://low-carb-recipes.p.rapidapi.com/search`,
    params: {
      
      limit: '4'
    },
    headers: {
      'X-RapidAPI-Key': '641f7f5a75msh09e1d463b52fe93p17e7f1jsne2964908cd2a',
      'X-RapidAPI-Host': 'low-carb-recipes.p.rapidapi.com'
    }
  };
  async function getRecipes() {
    try {
      const result = await axios.request(options);
      console.log(result)
 
      setRecipe(result.data);
      console.log(result.data);
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
    <div className="box" style={{ backgroundColor }}>
      <Fade style={{color: 'orange', FontWeight: '900', fontSize: '40px', marginLeft: '10rem'}}  cascade damping={1e-1} >Low Carb Recipes</Fade>
      <button className="dark" onClick={toggleBackground}>
        Dark Mode
      </button>
      <form onSubmit={submit}>
      {/*  <input
          type="text"
          placeholder="Keto Recipes, Click Search"
          value={query}
          disabled
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
        */}
        <button className="search" type="submit">
          Search
        </button>
      </form>

    
      {recipes.map(recipe => {
  return (
    <div  className= 'recipes' >


      <div>
      <img style={{width: '500px', border:'5px solid orange' }} src={recipe.image} alt="food" />
    <h1> {recipe.name}</h1>
  <ul style={{display:'flex',flexDirection: 'column'}}>


<li> {recipe.steps[0]}</li>
<li> {recipe.steps[1]}</li>
<li> {recipe.steps[2]}</li>
<li> {recipe.steps[3]}</li>
<li> {recipe.steps[4]}</li>





  </ul>
     
      
     </div>
      
    </div>
  );
})} 
    </div>
  );
}

import React from 'react'
import { useState, } from 'react'
import axios from 'axios'




export default function Recipes() {

 const ID= '4d95e5ae';
const key='2e14d5d85153801077245f9fd457dc62'


   const [query, setQuery]= useState('')
   const [recipes, setRecipe]= useState([])
  
const url = `https://api.edamam.com/search?q=${query}&app_id=${ID}&app_key=${key}`
 

async function getRecipes(){
  const result= await axios.get(url,{
   mode: 'no-cors', 
    credentials: 'include' });
  setRecipe(result.data.hits);
  console.log(result.data);

} 
   const submit=(e)=>{

e.preventDefault();
getRecipes();

   }
  return (
    <div>

<h1>Custom Search</h1>

<form onSubmit={submit}>

<input type="text"
placeholder='search Recipe'
value= {query}

onChange={(e)=>setQuery(e.target.value)}





/>

<button type='submit'>Search</button>


</form>

<ul>
{recipes.map((recipe)=>{

<li key={recipe.id}>

<h3>{recipe.title}</h3>


</li>



})}




</ul>






    </div>
  )
}

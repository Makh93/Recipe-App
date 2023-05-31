import {Routes, Route} from 'react-router-dom'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from './Components/Home'
import Recipes from './Components/Recipes'
import Member from './Components/Member';
import Login from './Components/Login'
import Default from './Components/Default';
import wood from './Images/wood.jpg'
import recipe from './Images/recipe.jpg'
import cupcake from './Images/cupcake.jpg'
import oreo from './Images/oreo.jpg'
import salad from './Images/salad.jpg'
import cookies from './Images/cookies.jpg'
import pizza from './Images/pizza.jpg'
import spaghetti from './Images/spaghetti.jpg'
import prawns from './Images/prawns.jpg'
import cake from './Images/cake.jpg'
import pie from './Images/pie.jpg'
function App() {





const images ={

wood: wood,
recipe:recipe,
cupcake:cupcake,
oreo:oreo,
salad:salad,
cookies:cookies,
pizza: pizza,
spaghetti: spaghetti,
prawns:prawns,
cake:cake,
pie:pie,
}




  return (
    <div className="App">
     
<Routes>
<Route path = '/' element= {<Home  />}>

<Route  index element={<Default images={images}/>}/>
<Route path='default' element={<Default  images={images} />}/>
<Route path='recipes' element={<Recipes/>}/>
<Route path = 'member' element= {<Member/>}/>
<Route path = 'login' element= {<Login />}/>
</Route>






</Routes>



    </div>
  );
}

export default App;

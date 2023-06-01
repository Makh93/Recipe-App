import React, {useState} from 'react'
import {  FaGripHorizontal} from "react-icons/fa";
import '../Components/member.css'
export default function Member({images}) {

  const [isBlack, setIsBlack] = useState(true);
 
  const backgroundColor = isBlack ? "white" : "black";

  const toggleBackground = () => {
    setIsBlack(!isBlack);
  };

 
 
 
  return (
    <div style={{backgroundColor}}>

<button  className= 'darkmode'  onClick={toggleBackground}>Dark Mode</button>   
<div style={{display:'flex', }}>
<h1>Members Directory</h1>

<div  style={{marginTop: '10rem', marginLeft: '7rem'}}>
<img src={images.men} style={{width: '200px', borderRadius: '50%', height: '200px', marginLeft:'30px'}} alt="" />
<h5 className='members'>Ramson Gorday</h5>
<p className='members'>  <FaGripHorizontal/> 18 Recipes</p>
</div>


<div   style={{marginTop: '10rem'}} >
<img src={images.junge} style={{width: '200px', borderRadius: '50%', height: '200px', marginLeft:'30px'}} alt="" />
<h5 className='members'>Silvia Marroni</h5>
<p className='members'>  <FaGripHorizontal/> 0 Recipes</p>
</div>




<div   style={{marginTop: '10rem'}} >
<img src={images.girl} style={{width: '200px', borderRadius: '50%', height: '200px', marginLeft:'30px'}} alt="" />
<h5 className='members'>Monica lisa</h5>
<p className='members'>  <FaGripHorizontal/> 3 Recipes</p>
</div>

</div>




<div style= {{display: 'flex',justifyContent: 'center', paddingBottom: '70px' }}>






<div   style={{marginTop: '5rem'}} >
<img src={images.boy} style={{width: '200px', borderRadius: '50%', height: '200px', marginLeft:'30px'}} alt="" />
<h5 className='members'>Rajesh khanaa</h5>
<p className='members'>  <FaGripHorizontal/> 7 Recipes</p>
</div>

<div   style={{marginTop: '5rem'}} >
<img src={images.boss} style={{width: '200px', borderRadius: '50%', height: '200px', marginLeft:'30px'}} alt="" />
<h5 className='members'>Maria Ramsray</h5>
<p className='members'>  <FaGripHorizontal/> 10 Recipes</p>
</div>


<div   style={{marginTop: '5rem'}} >
<img src={images.floral} style={{width: '200px', borderRadius: '50%', height: '200px', marginLeft:'30px'}} alt="" />
<h5 className='members'>Sarah Mia</h5>
<p className='members'>  <FaGripHorizontal/> 0 Recipes</p>
</div>


</div>






    </div>
  )
}

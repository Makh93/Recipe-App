import React, {useState} from 'react'
import '../Components/Login.css'
export default function Login() {

  const [isBlack, setIsBlack] = useState(true);

  const backgroundColor = isBlack ? "white" : "black";

  const toggleBackground = () => {
    setIsBlack(!isBlack);
  };


  return (
    <div style={{backgroundColor}}>
<button  className= 'darkmode'  onClick={toggleBackground}>Dark Mode</button>   

<form action="">

<h1>Become a Member</h1>

<p>Registering for this site is easy. Just fill in the fields below, and we'll get a new account set up for you in no time.</p>
<div className='inputs'>
<input type="text"
placeholder='username'
required />

<input type="text"
placeholder= 'Email address'
required />


<input type="text"
placeholder= 'Choose a Password'
required />

<input type="text"
placeholder= 'Confirm Password'
required />
<div>
</div>

<h2 style={{color: 'orange', marginTop: '20px', marginLeft: '40px'}}>Profile Details</h2>
<input type="text"
placeholder='Name' />

<button className='register'>Register</button>

</div>
</form>







    </div>
  )
}

import React, { useState, useEffect , useContext } from 'react';
import { Link, useHistory } from "react-router-dom";
import springLogo from "../../assets/kwame-2781373_960_720.jpg";

import { userContext } from "../../contexts/userContext";
import { ThemeContext } from '../../contexts/ThemeContext';

 import { LoggedInUserContext } from '../../contexts/LoggedInUserContext';
 import Login from '../login/Login';
import ThemeToggle from "../theme_button/ThemeToggle";
const Nav=()=>{
	 const [SOHB, setSOHB] = useState(null);
		   const [context, setContext] = useContext(userContext);
   //const {username} = useContext(ThemeContext);
    const {username} = useContext(LoggedInUserContext);
	   
	       const usernameval = username ? username : "";
         const history = useHistory();
	const handleLoginLogout = () => {

    console.log(localStorage.getItem('user') );
   // setUser({});
    //setUsername("");
   // setPassword("");
  // if(usernameval == ""){
	

	  
    if(localStorage.getItem('user') === null ){
 
    history.push("/login") 
   }else{
    localStorage.clear();
	setContext(false);
}
  };
  	useEffect(()=>{
 setSOHB(localStorage.getItem('user'));


})
	 //setSOHB(localStorage.getItem('user'));
	 console.log("localStorage.getItem('user')  " +localStorage.getItem('user'))

    return (
	<div>
	<div><h1><span style={{color: "red"}}>Citi</span><span style={{color: "gold"}}>zen A</span><span style={{color: "green"}}>ccra</span></h1></div>
	<nav className="navbar">
          
      <img src={springLogo} height="90" width="90"/>
	  
<div className="links">
        <Link to="/" style={{ 
          color: 'white', 
          backgroundColor: '#7f00ff',
          borderRadius: '8px' 
        }}>Home</Link>
		
        {localStorage.getItem('userID')   ?	<Link data-testid="requestf"  to="/Requestf" style={{ 
          color: 'white', 
          backgroundColor: '#7f00ff',
          borderRadius: '8px' 
        }}>New Submission</Link>:""
      }

	{/*
        <Link to="/create" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>New Blog</Link>
      */}
		          <button style={{ 
          color: 'white', 
          backgroundColor:'#7f00ff',
          borderRadius: '8px',
          padding:6,
          margin: 12
        }} onClick={handleLoginLogout}>
         {  localStorage.getItem('user') ? <p style={{color:'white'}}>Log out</p> : <p  style={{color:'white'}}>Login</p>}
      </button>
	  
    
      </div>
        	 <ThemeToggle />
         

         
        </nav>
			</div>
   )



}

export default Nav ;

/*return (<nav className="navbar">

         <h3>Logo</h3>
<div className="links">
        <Link to="/" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>Home</Link>
		<Link data-testid="medicine"  to="/" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>Medicine</Link>
		<Link data-testid="volunteer" to="/" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>Volunteer</Link>
		<Link  data-testid="feedback" to="/" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>Feedback</Link>
		
        <Link to="/create" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>New Blog</Link>
		
		          <button style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }} onClick={handleLogout}>
       Log out
      </button>
	  
     <h1>::: Welcome :::{usernameval}</h1>
      </div>
        	 <ThemeToggle />
         

         
        </nav>
		
   ) */

// <button onClick={() => setContext(false
/* <ul className="nav-links">
      
         <li data-testid="welcome"> Welcome  </li>

         
      
         <li data-testid="medicine">Medicine  </li>
         <li data-testid="volunteer">Volunteer </li>
         <li data-testid="feedback">Feedback  </li>
		 <li>     </li>
         </ul>
		 */

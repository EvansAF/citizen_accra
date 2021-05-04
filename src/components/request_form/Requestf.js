import React , { useContext, useEffect} from 'react';
import { userContext } from "../../contexts/userContext";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Axios from "axios";
//import { Index } from "./pages";
//import { Requestf } from "./components/Requestf";
import {API} from '../../config';

import { useState } from "react";
import { useHistory } from "react-router-dom";

//const Requestf = () => {
	export default function Requestf(){
		const [context, setContext] = useContext(userContext);
		 let foundUser = false ;
		  foundUser = localStorage.getItem("user");
		  
		   let UserIDV = "" ;
		  UserIDV = localStorage.getItem("userID");
		   	  setContext(UserIDV);

 //let foundUser ="none";
/*useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      //setUser(foundUser);
	  console.log("Found user :::"+foundUser);
	  setContext(foundUser);
    }
  }, []);*/
		
	// const msg = useContext(userContext);
	 
	   
	   

	   
	  // setContext(context);
	// const {user,setUser} = useContext(userContext);
	 
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  const history = useHistory();

  const handleSubmitOLD = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    fetch('http://localhost:3000/blogs/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      // history.go(-1); <h2>{loginUsername}</h2>
      history.push('/');
    })
  }




//register modified
   const handleSubmit = (e) => {
	   e.preventDefault();
	   let writerid = localStorage.getItem("userID");
    Axios({
      method: "POST",
      data: {
        title: title,
        body: body,
		author: author,
		writerid: writerid,
      },
      withCredentials: true,
      //  url: "http://localhost:4000/newrequest",
      url: `${API.API_LINK}/newrequest`,
    }).then((res) => console.log(res));
  };




  return (
  <div>
  <div>

  </div>
  {  
     foundUser ? 
    <div className="create">
      <h2>Share your nomination</h2>


      <form onSubmit={handleSubmit}>
        <label>Entry Title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Entry Text:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        {/* <label>Blog author:</label>
       <select 
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>*/}
        
        <button>Add Entry</button>
      </form>
	
    </div>
	: <h1>You are not loggedin </h1> }
	</div>
  );
}
 
//export default Requestf;



















/*
export default function Requestf(){
    return (
        <div>
            <div>
           <h1>Publish a need! </h1>
           <h2>Share your initiative</h2>
           </div>  
        </div>
    );
}
*/
import React, { useState ,useContext  } from "react";
import "../../App.css";
import Axios from "axios";
import { userContext } from "../../contexts/userContext";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import {API} from '../../config';

import { ThemeContext } from "../../contexts/ThemeContext";

import {LoggedInUserContext  } from "../../contexts/LoggedInUserContext";
import { BrowserRouter as Router, Route, Link , Switch ,useHistory } from "react-router-dom";

import {Redirect} from 'react-router';
//import { Index } from "./pages";
import Requestf  from "../request_form/Requestf.js";


function Login() {
  const history = useHistory(); 
	//  const {displayUserName} =	 useContext(ThemeContext);
	  
	   const {displayUserName} =	 useContext(LoggedInUserContext);
	//const [context, setContext] = useState(false);
	
	
	// const msg = useContext(userContext);
	   const [context, setContext] = useContext(userContext);
	   
	//const [loggedinValue, setLogin ] = useState(loggedin);
  const [registerName, setRegisterName] = useState("");
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerPasswordConfirmation, setRegisterPasswordConfirmation] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [userCreated, setUserCreated] = useState("");
  const [data, setData] = useState(null);
  const [dataID, setDataID] = useState(null);
 const [selectedTab, setSelectedTab ] =useState("loginTab");
  const loggedinTrue = true ;
  
  const register = () => {
if(registerPassword !== registerPasswordConfirmation){
  return alert("Passwords don't match")
}


    Axios({
      method: "POST",
      data: {
      name: registerName,
        username: registerUsername,
        password: registerPassword,
      },
      withCredentials: true,
      url: `${API.API_LINK}/register`,
    }).then((res) =>{
 

       setRegisterName("");
      setRegisterUsername("");
      setRegisterPassword("");
      handleTabChange("registerTab");
      console.log(res);
      if(res.data==='User Created'){
      setUserCreated(true);
      }else{
        setUserCreated(false);
      }
        
    } );
  };
  const login = () => {
    Axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: `${API.API_LINK}/login`,
    }).then((res) => {
		      setData(res.data);
			  
          console.log("userid >>>" +res.data._id);
		  
		    var holdId = res.data._id;
			var string1='undefined';
			 var result = string1.localeCompare(holdId);
			console.log("result  "+result)
		  		   console.log("holdId b4  " +holdId);
		    if(result != 0){
				  var holdId= res.data._id;
		  		   console.log("holdId   " +holdId);
				setDataID(res.data._id);
		   window.localStorage.setItem('userID', res.data._id);
			}
		   displayUserName(res.data.username);
		}
	
	
	
	  
	);
  };
  const getUser = () => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: `${API.API_LINK}/user`,
    }).then((res) => {
      setData(res.data);

	  //localStorage.setItem('user', res.data)
//                                     window.localStorage.setItem('userID', res.data._id);
      console.log(res.data);
	  // console.log(res.data.username);
	    console.log(res.data);
    });
  };
 const handleTabChange = (tabValue) => {

  //var currentTab = tabId.getActiveTab();
  setSelectedTab(tabValue);
  console.log(tabValue );
};


     {/*<div className="App"> */}
  return (

    
    <div className="login-page">
	


  <Tabs  id="tabId" value={selectedTab} onChange={(e)=>handleTabChange(e)}>
    <TabList>
      
      <Tab  label="Login" value="loginTab" >Login</Tab>
      <Tab  label="Register" value="registerTab" >Register</Tab>
      </TabList>

 
    <TabPanel>
     

      <div>
        <h1>Login</h1>
        <input
          placeholder="username"
          onChange={(e) => setLoginUsername(e.target.value)}
        /><br></br>
        <input type="password"
          placeholder="password"
          onChange={(e) => setLoginPassword(e.target.value)}
        /><br></br>
        <button onClick={login}> Submit</button>
			{dataID ? <h1> userid {dataID} </h1>: null}
      </div>


      <div>
	  {/*
        <h1>Get User</h1>
        <button onClick={getUser}>Submit</button>
        {dataID ? <h1>Welcome Back {data.username} userid {dataID}</h1> : null}
	  */}
      </div>
	  
	           {dataID ? window.localStorage.setItem('user', true): window.localStorage.setItem('user', false)}

                {dataID ? setContext("true"): false }

                {dataID ?      history.push("/Requestf")     : <h1> You are not yet Loggedin </h1>}
	  		
                </TabPanel>
                <TabPanel>
   
    








   <div>
     <h1>Register</h1>
     <h3 >{userCreated ? <h3>You are registered </h3>: <h1>You could not be registered</h1> }</h3>
    
    
      
     <input value={registerName}
       placeholder="name"
       onChange={(e) => setRegisterName(e.target.value)}
     /><br></br>
     <input value={registerUsername}
       placeholder="username"
       onChange={(e) => setRegisterUsername(e.target.value)}
     /><br></br>
     <input value={registerPassword} type="password"
       placeholder="password"
       onChange={(e) => setRegisterPassword(e.target.value)}
     /><br></br>
        <input value={registerPasswordConfirmation }  type="password"
       placeholder="password confirmation"
       onChange={(e) => setRegisterPasswordConfirmation(e.target.value)}
     /><br></br>
     <button onClick={register}>Submit</button>
   </div>
   </TabPanel>
  </Tabs>
				      
            
	  
    </div>
	

   
  );
}/*	{data ?  <Redirect to="/Requestf"/>: <h1> You are not Loggedin </h1>}

   {data ? setContext("true"): false }
	  			{data ?  <Redirect to="/Requestf"/>: <h1> You are not Loggedin </h1>}
				
				
				
				
				
				
			{data ?   <Redirect to="/Requestf"/>: <h1> You are not Loggedin </h1>}


	  { data ? () => setLogin(true) : ""}
		  {loggedin}







  <Redirect to="/Requestf"/>


 <Switch>
	<Route path ="/Requestf">
	   <Requestf/>
	   </Route>
	   </Switch>*/
//loginUsername

//  <Redirect to="/Requestf/"/><Route path="/Requestf" component={Requestf} /> <Route path="../request_form/Requestf.js" component={Requestf} />
export default Login;
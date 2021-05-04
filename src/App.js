import React, {useState, useContext, useEffect} from 'react';
//import './App.css';
import Nav from './components/nav/Nav';
import Login from './components/login/Login';
import Home from './components/list_home/Home';
import Requestf from './components/request_form/Requestf';
import EditRequests from './components/edit_page/EditRequests';
import RequestListDetails  from './components/request_list_details/RequestListDetails';
//import {UserContext} from './contexts/UserContext';
import {userContext} from './contexts/userContext';

import ThemeContextProvider from './contexts/ThemeContext';
 import LoggedInUserContextProvider from './contexts/LoggedInUserContext'; 
 import CarryForEditContextProvider from './contexts/CarryForEditContext'   ;
//https://dev.to/efearas/how-to-usecontext-and-set-value-of-context-in-child-components-in-3-steps-3j9h
import { BrowserRouter as Router, Route, Link , Switch } from "react-router-dom";
function App() {
               
			   const [context, setContext] = useState(true);
			   
			   useEffect(() => {
  
	setContext(false)
	
  },[]);

 
 
 //{context ? <Requestf/>:<h1>Not Loggedin </h1>}
 
//const stayloggedin = context ;
  return (
  <Router>
    <div className="App">
	<LoggedInUserContextProvider>
	<CarryForEditContextProvider>
	 <ThemeContextProvider>
 <userContext.Provider value={[context, setContext]} >
   
        <Nav/>
		
      <Switch>
	   <Route exact path ="/">
	 <Home />
	 
	 
	 </Route>
	  <Route path="/fetchsinglerequest/:id">
              <RequestListDetails />
            </Route>
	  
	 <Route exact path ="/login">
	 <Login />
	 
	 
	 </Route>
 
	   <Route exact path ="/Requestf">
	  
	  <Requestf/>
	  

	  
	   </Route>

	   <Route exact path="/fetchSingleForEdit/:id">
	  
	  <EditRequests/>
	  

	  
	   </Route>
	 
   </Switch>

     </userContext.Provider>
	 
	  </ThemeContextProvider>
	  </CarryForEditContextProvider>
	  </LoggedInUserContextProvider>
    </div>
	</Router>
	
  );
}

export default App;// <userContext.Provider value={[context, setContext]}>
// <Nav/> //<Requestf/>
/*
   <userContext.Provider>
      <Switch>
	 <Route exact path ="/">
	 <Login/>
	 </Route>
	   <Route path ="/Requestf">
	   <Requestf/>
	   </Route>
   </Switch>
     </userContext.Provider >
	 
	 
	 */
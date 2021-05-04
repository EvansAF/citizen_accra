import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();
//https://www.youtube.com/watch?v=bJXAHHpyVes&list=PL4cUxeGkcC9hNokByJilPg5g9m2APUePI&index=7


//a net ninja tutorial 
//https://github.com/iamshaunjp/react-context-hooks/blob/lesson-6/contextapp/src/contexts/ThemeContext.js
class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
    dark: { syntax: '#ddd', ui: '#333', bg: '#555'},
	
  }
  toggleTheme= () => {
    this.setState({ isLightTheme: !this.state.isLightTheme });
  }
  
  
  
  
  render() { 
    return (
 <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
 /*
 moved more appropriately to the LoggedInUserContext
   state = {
  username: ""
  }
 
displayUserName= (username) => {
    this.setState({ username: username });
  }
 
   <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme, displayUserName: this.displayUserName  }}>*/
export default ThemeContextProvider;
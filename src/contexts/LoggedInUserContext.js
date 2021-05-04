import React, { Component, createContext } from 'react';

export const LoggedInUserContext = createContext();

class  LoggedInUserContextProvider extends Component {
  state = {
 username: ""
  }
 
displayUserName= (username) => {
    this.setState({ username: username });
  }
  render() { 
    return (
      <LoggedInUserContext.Provider value={{...this.state, displayUserName: this.displayUserName  }}>
        {this.props.children}
      </LoggedInUserContext.Provider>
    );
  }
}

export default LoggedInUserContextProvider;
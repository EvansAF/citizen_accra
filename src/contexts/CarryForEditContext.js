import React, { Component, createContext } from 'react';

export const CarryForEditContext = createContext();

class  CarryForEditContextProvider extends Component {
  state = {
 title: "",
  body: "",
  author: "",
  writerid :""
  }
 
holdforEdit= (title, body, author, writerid) => {
    this.setState({ title: title, body:body , author:author, writerid:writerid});
  }
  render() { 
    return (
      <CarryForEditContext.Provider value={{...this.state, holdforEdit: this.holdforEdit  }}>
        {this.props.children}
      </CarryForEditContext.Provider>
    );
  }
}

export default CarryForEditContextProvider;
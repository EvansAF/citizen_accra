import React, { Component } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import SettingsIcon from '@material-ui/icons/Settings';
class ThemeToggle extends Component {
  static contextType = ThemeContext;
  render() { 
    const { toggleTheme } = this.context;
    return ( <SettingsIcon
  
      onClick={toggleTheme}
      color="#d8d8d8"
    ></SettingsIcon>);
  }
}
 
export default ThemeToggle;
          
          
          
/* 

return ( <button onClick={toggleTheme} style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>Toggle the theme</button>);




<SettingsIcon
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              ></SettingsIcon> */
import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
//BlogList
//  <div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
//original div 
const RequestList = ({ blogs }) => {
	
	 //static contextType = ThemeContext;
	 //const contextType = ThemeContext;
	
	 // const { isLightTheme, light, dark } = this.context;  //orginal
	   const { isLightTheme, light, dark } =	 useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
	
	
	
  return (





	<div className="blog-list" style={{ color: theme.syntax, background: theme.bg }}>
      {blogs.map(blog => (
        <div className="blog-preview" key={blog._id} >
          <Link to={`/fetchsinglerequest/${blog._id}`}>
            <h2>{ blog.title }</h2>
            <p>Written by { blog.users[0]["name"]}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default RequestList;
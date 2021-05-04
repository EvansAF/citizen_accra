import { useHistory, useParams } from "react-router-dom";
//import useFetch from "./useFetch";
import React, {useState, useEffect, useContext} from "react";
import useFetch from "./../../custom_hooks/useFetch";
import { CarryForEditContext} from "../../contexts/CarryForEditContext";
import {API} from '../../config';
const EditRequests = () => {

const {title, body,author, writerid} =	 useContext(CarryForEditContext);
       console.log(title, body, author, writerid) 
 const { id } = useParams();
  //const id = '605107d1ac029537c4678e8e';
 
  //working const { data: blog, error, isPending } = useFetch('http://localhost:4000/fetchsinglerequest/' + id);
  const { data: blog, error, isPending } = useFetch( `${API.API_LINK}/fetchsinglerequest/` + id);
  //  const { data: blog, error, isPending } = useFetch('http://localhost:3000/blogs/' + id);
  const [titleE, setTitle] = useState(title);
  const [bodyE, setBody] = useState(body);
  const [authorE, setAuthor]= useState(author);

  const [writeridE, setWriterid]= useState(writerid)
  
  
  const history = useHistory();

  const UserIDV = localStorage.getItem("userID");


  const handleClickEdit = ()=>{

  // working fetch('http://localhost:4000/fetchsinglerequest/' + blog.id, {
    fetch(`${API.API_LINK}/fetchsinglerequest/`+ blog.id, {
  method: 'DELETE'
    }).then(() => {
      history.push('/');
    }) 

  }
  const handleClick = () => {

    //   fetch('http://localhost:4000/fetchsinglerequest/' + blog.id, {
    fetch(`${API.API_LINK}/fetchsinglerequest/` + blog.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    }) 
  }




  return (
    <div className="blog-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { 
           title && (
        <article>
       <div>
     
          <input
            placeholder="Title" value={titleE }
            onChange={(e) => setTitle(e.target.value)}></input>
          </div>
          <p>Written by { authorE }</p>
         
         <div> <input
            placeholder="Title" value={bodyE }
            onChange={(e) => setBody(e.target.value)}></input></div>
        
      <div> 
          <input  value={writeridE }></input>
      </div>
           <div> 
     <input  value={authorE}  ></input></div>
             <button onClick={handleClickEdit}>Edit</button>
          <button onClick={handleClick}>delete</button>
        </article>
           )}
    </div>
  );
}
 
export default EditRequests;

/* > <input
            placeholder="Title" value={title}
            onChange={(e) => setTitle(e.target.value)}
          /*/
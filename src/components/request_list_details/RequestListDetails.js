import { useHistory, useParams , Link  } from "react-router-dom";
//import useFetch from "./useFetch";
import Axios from "axios";
import {useContext, useState, useEffect} from "react";
import useFetch from "./../../custom_hooks/useFetch";
import { CarryForEditContext} from "../../contexts/CarryForEditContext";
import {API} from '../../config';

//import { userContext } from "../../contexts/userContext";
const RequestListDetails = () => {
  const { id } = useParams();
  //worked const { data: blog, error, isPending } = useFetch('http://localhost:4000/fetchsinglerequest/' + id); 
 
 
  const { data: blog, error, isPending } = useFetch(`${API.API_LINK}/fetchsinglerequest/` + id);
 console.log(blog)
 
 
  //  const { data: blog, error, isPending } = useFetch('http://localhost:3000/blogs/' + id);
  const history = useHistory();
  //const navigate = useNavigate()
  //const UserIDV =  1 ; 
const UserIDV =    localStorage.getItem("userID");

  const { holdforEdit } =	 useContext(CarryForEditContext);
  
//4000/fetchsinglerequest/
//    fetch('http://localhost:3000/blogs/' + blog.id, {
   const [title,setTitle] =useState('');
    const [body,setBody] =useState('');
    const [author,setAuthor] =useState('');
    const [writerid,setWriterid] =useState('');   
    const  [count , setCount] =useState(0);
   
    const setTitleAndBody = ()=>{
    
         setTitle(blog[0].title); 
          setBody(blog[0].body);
          setAuthor(blog[0].author);
          setWriterid(blog[0].writerid)
           
          holdforEdit(title, body, author, writerid);
         
      
         }


  const handleClick = () => {

    fetch(`${API.API_LINK}/fetchsinglerequest/` + blog.id, {
   // fetch('http://localhost:4000/fetchsinglerequest/' + blog.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    }) 
  }


  const handleClickEdit = () => {


    Axios({
      method:"POST",
      data: {
            title: title,
             bodynotes: body,
      },
      withCredentials: true,
      //     url: "http://localhost:4000/updateuser/" + id,
      url: `${API.API_LINK}/updateuser/` + id,
    }).then(
      () => {
        history.push('/');
      }
     // (res) => console.log(res)
      
      
      );
  }; 



  //'/deleterecord/:id'

  const handleClickDelete = () => {


    Axios({
      method:"POST",
      withCredentials: true,
      //   url: "http://localhost:4000/deleterecord/" + id,
      url: `${API.API_LINK}/deleterecord/` + id,
    }).then(
      () => {
        history.push('/');
      }
     // (res) => console.log(res)
      
      
      );
  }; 



/*
    //app.put('/updateuser/:id', (req, res) => {
    fetch('http://localhost:4000/updateuser/' + blog.id, {
      method: 'PUT',
      data : {title : title,
              body :body }

    }).then(() => {
      history.push('/');
    }) 
  }*/

let showEditFields = false ;
let reRendedforEdit = false ;
let  showEditBtns = false ;
let EditBtnLabel = 'Edit';

if (blog && (UserIDV === blog[0].writerid) ){ 
  showEditBtns = true ;
 
 
}

/*
useEffect(()=>{

  reRendedforEdit = true ;

},[count])
*/
                           //   let reRendedforEdit  ;       
if (blog && (UserIDV === blog[0].writerid) && count > 0 ){ 
       showEditFields = true ;
       EditBtnLabel = 'Update ';
      
      
}

const handleEditShow =()=>{
 
   setCount(count + 1);
   console.log("in here "+count );
   if(count >= 1 ){
console.log("in here "+count );
    handleClickEdit(); 
   }

}
  return (
    <div className="blog-details">
  
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && count > 0 ? (
          <article>
          <div>
        
             <input
               placeholder="Title" value={title ? title:  blog[0].title }
               onChange={(e) => setTitle(e.target.value)}></input>
             </div>

            <div> <textarea
               placeholder="Body" value={body ? body:blog[0].body }
               onChange={(e) => setBody(e.target.value)}></textarea></div>
                      
            
             
            
           </article>
      ): blog && (
        <article>
       
          <h2>{ blog[0].title }</h2>
       
          <div>{ blog[0].body }</div>
          <p>Written by { blog[0].users[0]["name"] }</p>
      
          
        </article>
      )
      
      
      }

      { blog && showEditBtns? (
        <div>
 <button id="editBtn" onClick={handleEditShow}>{`${EditBtnLabel}`}</button>
 <button onClick={handleClickDelete}>delete</button>
 </div>
      ): "" 

      }
    </div>
  );
}
 
export default RequestListDetails;

/*  <input
            placeholder="Title" value={title}
            onChange={(e) => setTitle(e.target.value)}
          />*/
import RequestList from "./../list_requests/RequestList";

import useFetch from "./../../custom_hooks/useFetch";
import {API} from '../../config';
const Home = () => {
//working locally const { error, isPending, data: blogs } = useFetch('http://localhost:4000/fetchrequests') ;//working version for localhost // 

 const { error, isPending, data: blogs } = useFetch(`${API.API_LINK}/fetchrequests`)
  // console.log("blogsvalue:::: "+blogs);
   console.log(blogs);
 // const { error, isPending, data: blogs } = useFetch('https://git.heroku.com/desolate-thicket-86826.git/fetchrequests');
  //  const { error, isPending, data: blogs } = useFetch('http://localhost:3000/blogs')
  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <RequestList blogs={blogs} /> }
      <div>
    

</div>
    </div>

  );
}
 
export default Home;

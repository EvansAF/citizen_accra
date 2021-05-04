var urlpath = window.location.href ;

var HOLD_API_LINK ="";
//different backends are used when running the app locally and when running online hence the loop below...same database though is used
if (urlpath.substring(0,16) === 'http://localhost'){

    HOLD_API_LINK = 'http://localhost:4000';

}else{ 
  
    HOLD_API_LINK = 'https://guarded-taiga-77263.herokuapp.com';
}

export const API_LINK = HOLD_API_LINK;
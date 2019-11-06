import { combineReducers } from 'redux';
const initState = {
    pageTitle: '首页'
  }
  
let a =  (state = initState, action) => {
        return state;
 
  }
  
  export default combineReducers ({a});
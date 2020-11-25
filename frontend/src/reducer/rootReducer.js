import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
  } from "../actions/types";
  
  const user = localStorage.getItem("user")? localStorage.getItem("user"): null;
  const initialState = user
    ? { isLoggedIn: true, user }
    : { isLoggedIn: false, user: null };
  
 const rootReducer = (state = initialState, action) => {
  
    switch (action.type) {
      case REGISTER_SUCCESS:
        return {
          ...state,
          user: action.payload,
          isLoggedIn: true,
        };
      case REGISTER_FAIL:
        return {
          ...state,
          user: null,
          isLoggedIn: false,
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          isLoggedIn: true,
          user: action.payload,
        };
      case LOGIN_FAIL:
        return {
          ...state,
          isLoggedIn: false,
          user: null,
        };
      case LOGOUT:
        return {
          ...state,
          isLoggedIn: false,
          isLoggedOut: true,
          user: action.payload,
        };
      default:
        return state;
    }
  }
  export default rootReducer;
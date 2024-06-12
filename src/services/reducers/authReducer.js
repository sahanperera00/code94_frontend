import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGOUT,
} from "../actions/authActions.js";

const initialState = {
  isAuthenticated: false,
  userId: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        userId: action.payload,
        error: null,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        userId: null,
        error: action.payload,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        userId: null,
        error: null,
      };
    default:
      return state;
  }
};

export default authReducer;

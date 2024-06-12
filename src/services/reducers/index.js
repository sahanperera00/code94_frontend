import { combineReducers } from "redux";
import authReducer from "./authReducer.js";
import productReducer from "./productReducer.js";

const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
});

export default rootReducer;

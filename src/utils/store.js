import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../services/reducers";

const store = configureStore({
  reducer: rootReducer,
});

export default store;

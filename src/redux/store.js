import { combineReducers, createStore } from "redux";
import countReducer from "./reducers/count";
import loginReducer from "./reducers/login";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  test: countReducer,
  login: loginReducer,
});
const store = configureStore({
  reducer: rootReducer,
});

export default store;

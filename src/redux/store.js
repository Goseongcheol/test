import { combineReducers, createStore } from "redux";
import countReducer from "./reducers/count";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  test: countReducer,
});
const store = configureStore({
  reducer: rootReducer,
});

export default store;

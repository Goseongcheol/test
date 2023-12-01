import { combineReducers, createStore, configureStore } from "@reduxjs/toolkit";
import countReducer from "./reducers/count";
import loginReducer from "./reducers/login";
import { persistReducer, persistStore } from "redux-persist";
import sessionStorage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  test: countReducer,
  login: loginReducer,
});

const persistConfig = {
  key: "root",
  storage: sessionStorage,
  whitelist: ["login"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export default store;

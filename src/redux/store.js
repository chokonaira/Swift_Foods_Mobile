import { createStore, applyMiddleware } from "redux";
import AsyncStorage from "@react-native-community/async-storage";
import { persistStore, persistReducer } from 'redux-persist';
import logger from 'redux-logger';
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  blacklist: ['existingUser', 'createdBasket']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleware = [thunk];

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middleware, logger))
);
console.log(store.getState(), 'na store be main this oo')

const persistor = persistStore(store);

export { persistor, store };

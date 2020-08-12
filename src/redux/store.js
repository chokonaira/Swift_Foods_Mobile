import { createStore, applyMiddleware } from "redux";
import AsyncStorage from "@react-native-community/async-storage";
// import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import logger from 'redux-logger';
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const persistConfig = {
  key: "existingUser",
  storage: AsyncStorage,
  whitelist: ['existingUser']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleware = [thunk];

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middleware, logger))
);

const persistor = persistStore(store);

export { persistor, store };

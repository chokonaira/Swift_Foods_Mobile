import {combineReducers} from 'redux';
import registerReducer from './RegisterReducer'
import loginReducer from './LoginReducer'
import profileReducer from './ProfileReducer'
import AsyncStorage from "@react-native-community/async-storage";
import { persistReducer } from 'redux-persist';
import createShoppingBasket from './BasketReducer'


const existingUserPersistConfig = {
  key: 'existingUser',
  storage: AsyncStorage,
  blacklist: ['errors', 'loading', 'isError',]
}

const existingUserBasketPersistConfig = {
  key: 'basket',
  storage: AsyncStorage,
  blacklist: ['errors', 'loading', 'isError']
}


export default combineReducers({ 
  newUser: registerReducer,
  existingUser: persistReducer(existingUserPersistConfig, loginReducer),
  userProfile: profileReducer,
  basket: persistReducer(existingUserBasketPersistConfig, createShoppingBasket)
});


// export {profileReducer}
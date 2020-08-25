import {combineReducers} from 'redux';
import registerReducer from './RegisterReducer'
import loginReducer from './LoginReducer'
import profileReducer from './ProfileReducer'
import AsyncStorage from "@react-native-community/async-storage";
import { persistReducer } from 'redux-persist';
import createShoppingBasket from './CreateBasketReducer'
import fetchShoppingBasket from './GetBasketReducer'
import fetchProductReducer from './ProductReducer'
import fetchACategoryReducer from './CategoryReducer'



const existingUserPersistConfig = {
  key: 'existingUser',
  storage: AsyncStorage,
  blacklist: ['errors', 'loading', 'isError',]
}

const existingUserBasketPersistConfig = {
  key: 'createdBasket',
  storage: AsyncStorage,
  blacklist: ['errors', 'isError', 'loading']
}


export default combineReducers({ 
  newUser: registerReducer,
  existingUser: persistReducer(existingUserPersistConfig, loginReducer),
  userProfile: profileReducer,
  createdBasket: persistReducer(existingUserBasketPersistConfig, createShoppingBasket),
  existingBasket: fetchShoppingBasket,
  products: fetchProductReducer,
  category: fetchACategoryReducer
});


// export {profileReducer}

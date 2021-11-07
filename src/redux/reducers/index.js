import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { fetchAllProductReducer } from './ProductReducer';
import { fetchACategoryReducer, fetchAllCategoryReducer } from './CategoryReducer';
import { fetchARestaurantsReducer, fetchAllRestaurantsReducer } from './RestaurantReducer';
import { basketItemsReducer } from './BasketItemsReducer';
import registerReducer from './RegisterReducer';
import loginReducer from './LoginReducer';
import profileReducer from './ProfileReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createShoppingBasket from './CreateBasketReducer';
import fetchShoppingBasket from './GetBasketReducer';


const existingUserPersistConfig = {
  key: 'existingUser',
  storage: AsyncStorage,
  blacklist: ['errors', 'loading', 'isError', 'isLoggout']
};

const existingUserBasketPersistConfig = {
  key: 'createdBasket',
  storage: AsyncStorage,
  blacklist: ['errors', 'isError', 'loading', 'isLoggout']
};


export default combineReducers({ 
  newUser: registerReducer,
  existingUser: persistReducer(existingUserPersistConfig, loginReducer),
  userProfile: profileReducer,
  createdBasket: persistReducer(existingUserBasketPersistConfig, createShoppingBasket),
  existingBasket: fetchShoppingBasket,
  products: fetchAllProductReducer,
  category: fetchACategoryReducer,
  categories: fetchAllCategoryReducer,
  restaurant: fetchARestaurantsReducer,
  restaurants: fetchAllRestaurantsReducer,
  basketItems: basketItemsReducer
});

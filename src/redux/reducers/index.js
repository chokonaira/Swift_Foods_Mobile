import {combineReducers} from 'redux';
import registerReducer from './RegisterReducer'


export default combineReducers({ 
  newUser: registerReducer
});
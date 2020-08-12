import {combineReducers} from 'redux';
import registerReducer from './RegisterReducer'
import loginReducer from './LoginReducer'


export default combineReducers({ 
  newUser: registerReducer,
  existingUser: loginReducer
});
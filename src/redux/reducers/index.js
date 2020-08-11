import {combineReducers} from 'redux';
import registerReducer from './RegisterReducer'
import loginReducer from './RegisterReducer'


export default combineReducers({ 
  newUser: registerReducer,
  existingUser: loginReducer
});
import {combineReducers} from 'redux';
import registerReducer from './RegisterReducer'
import loginReducer from './LoginReducer'
import profileReducer from './ProfileReducer'

export default combineReducers({ 
  newUser: registerReducer,
  existingUser: loginReducer,
  userProfile: profileReducer
});
import * as types from '../actions';

const initialState = {
  existingUser: null,
  errors: null,
  loading: false,
  isAuthenticated: false,
  isError: false,
  
}


const loginReducer = (state = initialState, action) => {
  switch(action.type){
    case types.LOGIN_LOADING:
      return {
        ...state,
        loading: true
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        existingUser: action.payload,
        errors: null,
        loading: false,
        isAuthenticated: true, 
        isError: false,
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        errors: action.payload,
        existingUser: null,
        isAuthenticated: false, 
        loading: false,
        isError: true,
      };
      default: 
        return state
  }
}

export default loginReducer;

import * as types from '../actions';

const initialState = {
  existingUser: {},
  isLoading: false,
  isAuthenticated: false,
  isError: false
}


const loginReducer = (state = initialState, action) => {
  switch(action.type){
    case types.LOGIN_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        existingUser: action.payload,
        isLoading: false,
        isAuthenticated: true
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        existingUser: action.payload,
        isLoading: false,
        isError: true
      };
      default: 
        return state
  }
}

export default loginReducer;

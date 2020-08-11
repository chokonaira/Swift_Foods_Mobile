import * as types from '../actions';

const initialState = {
  newUser: {},
  loading: false,
  isAuthenticated: false,
  isError: false
};
const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER_LOADING:
      return {
        ...state,
        loading: true,
        isAuthenticated: false,
        isError: false
      };
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        newUser: action.payload,
        loading: false,
        isAuthenticated: true,
        
      };
      case types.REGISTER_FAILURE:
      return {
        ...state,
        newUser: action.payload,
        loading: false,
        isError: true
        
      };
    default:
      return state;
  }
};

export default registerReducer;

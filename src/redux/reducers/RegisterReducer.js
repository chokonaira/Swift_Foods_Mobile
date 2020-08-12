import * as types from '../actions';

const initialState = {
  newUser: {},
  loading: false,
  isRegistered: false,
  isError: false
};
const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER_LOADING:
      return {
        ...state,
        loading: true,
        isRegistered: false,
        isError: false
      };
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        newUser: action.payload,
        loading: false,
        isRegistered: true,
        
      };
      case types.REGISTER_FAILURE:
      return {
        ...state,
        newUser: action.payload,
        loading: false,
        isRegistered: false,
        isError: true
        
      };
    default:
      return state;
  }
};

export default registerReducer;

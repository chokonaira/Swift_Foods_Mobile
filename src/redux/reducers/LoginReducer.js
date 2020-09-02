import * as types from "../actions";

const initialState = {
  existingUser: [],
  errors: {},
  loading: false,
  isAuthenticated: false,
  isError: false,
  isLoggout: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_LOADING:
      return {
        ...state,
        loading: true,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        existingUser: action.payload,
        loading: false,
        isAuthenticated: true,
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        errors: action.payload,
        loading: false,
        isError: true,
      };
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        existingUser: null,
        loading: false,
        isAuthenticated: false,
        isLoggout: true,
      };
    default:
      return state;
  }
};

export default loginReducer;

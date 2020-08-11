import * as types from '../actions';

const initialState = {
  newUser: {},
  loading: false,
};
const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        newUser: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default registerReducer;

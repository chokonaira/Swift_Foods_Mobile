import * as types from '../actions';

const initialState = {
  userProfile: {},
  errors: {},
  loading: false,
  isSuccess: false,
  isError: false,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.PROFILE_LOADING:
      return {
        ...state,
        loading: true,
      };
    case types.PROFILE_SUCCESS:
      return {
        ...state,
        userProfile: action.payload,
        loading: false,
        isSuccess: true,
      };
    case types.PROFILE_FAILURE:
      return {
        errors: action.payload,
        loading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default profileReducer;

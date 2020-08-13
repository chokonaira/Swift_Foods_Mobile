import * as types from "../actions";

const initialState = {
  userProfile: null,
  errors: null,
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
        isError: false,
      };
    case types.PROFILE_FAILURE:
      return {
        erros: action.payload,
        errors: action.payload,
        loading: false,
        isSuccess: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default profileReducer;

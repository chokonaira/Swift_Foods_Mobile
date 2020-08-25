import * as types from "../actions";

const initialState = {
  category: {},
  loading: false,
  errror: {},
  isFetched: false,
  isError: false,
};

const fetchACategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_A_CATEGORY_LOADING:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_A_CATEGORY_SUCCESS:
      return {
        ...state,
        category: action.payload,
        loading: false,
        isFetched: true,
      };
    case types.FETCH_A_CATEGORY_FAILURE:
      return {
        ...state,
        errors: action.payload,
        loading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default fetchACategoryReducer;

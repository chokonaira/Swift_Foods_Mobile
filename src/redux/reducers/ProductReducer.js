import * as types from "../actions";

const initialState = {
  products: [],
  loading: false,
  errror: [],
  isFetched: false,
  isError: false,
};

const fetchProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_FOOD_LOADING:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_FOOD_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
        isFetched: true,
      };
    case types.FETCH_FOOD_FAILURE:
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

export default fetchProductReducer;

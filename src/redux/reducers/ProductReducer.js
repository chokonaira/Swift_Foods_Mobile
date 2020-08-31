import * as types from "../actions";

const initialState = {
  products: [],
  errror: {},
  loading: false,
  isProductsFetched: false,
  isError: false,
};

export const fetchAllProductReducer = (state = initialState, action) => {
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
        isProductsFetched: true,
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



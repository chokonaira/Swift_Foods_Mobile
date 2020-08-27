import * as types from "../actions";

const initialState = {
  categories: [],
  categoryByRestaurant: {},
  loading: false,
  errror: {},
  isCategoriesFetched: false,
  isError: false,
};

export const fetchAllCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ALL_CATEGORY_LOADING:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_ALL_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: action.payload,
        loading: false,
        isCategoriesFetched: true,
      };
    case types.FETCH_ALL_CATEGORY_FAILURE:
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

export const fetchAllCategoriesByRestaurantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_A_RESTAURANT_LOADING:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_A_RESTAURANT_SUCCESS:
      return {
        ...state,
        productsByCategory: action.payload,
        loading: false,
        isCategoriesFetched: true,
      };
    case types.FETCH_A_RESTAURANT_FAILURE:
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
import * as types from "../actions";

const initialState = {
  categories: [],
  category: {},
  errror: {},
  loading: false,
  isCategoriesFetched: false,
  isCategoryFetched: false,
  isError: false,
};

export const fetchACategoryReducer = (state = initialState, action) => {
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
        isCategoryFetched: true,
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


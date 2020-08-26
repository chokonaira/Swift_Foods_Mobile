import * as types from "../actions";

const initialState = {
  categories: [],
  category: {},
  loading: false,
  errror: {},
  allCategoryFetched: false,
  aCatgoryFetched: false,
  isError: false,
};

export const fetchAProductByCategoryReducer = (state = initialState, action) => {
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
        aCatgoryFetched: true,
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
        allCategoryFetched: true,
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

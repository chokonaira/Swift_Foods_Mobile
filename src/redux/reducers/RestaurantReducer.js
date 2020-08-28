import * as types from "../actions";

const initialState = {
  restaurants: [],
  restaurant: {},
  errror: {},
  loading: false,
  isRestaurantsFetched: false,
  isRestaurantFetched: false,
  isError: false,
};

export const fetchARestaurantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_A_RESTAURANT_LOADING:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_A_RESTAURANT_SUCCESS:
      return {
        ...state,
        restaurant: action.payload,
        loading: false,
        isRestaurantFetched: true,
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

export const fetchAllRestaurantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ALL_RESTAURANTS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_ALL_RESTAURANTS_SUCCESS:
      return {
        ...state,
        restaurants: action.payload,
        loading: false,
        allRestaurantsFetched: true,
      };
    case types.FETCH_ALL_RESTAURANTS_FAILURE:
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

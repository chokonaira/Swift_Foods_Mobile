import * as types from "../actions";

const initialState = {
  restaurants: [],
  loading: false,
  errror: {},
  allRestaurantsFetched: false,
  isError: false,
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

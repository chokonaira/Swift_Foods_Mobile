import * as types from "../actions/index";

const initialState = {
  basket: {},
  basketFetched: false,
  loading: false,
  errors: null,
  isError: false,
};

const fetchShoppingBasket = (state = initialState, action) => {
  switch (action.type) {
    case types.BASKET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_BASKET_SUCCESS:
      return {
        ...state,
        basket: action.payload,
        loading: false,
        basketFetched: true,
      };
    case types.FETCH_BASKET_FAILURE:
      return {
        ...state,
        errors: action.payload,
        loading: false,
        isError: true,
        basketFetched: false,
      };
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        basket: null,
        loading: false,
        isBasketbasketFetchedCreated: false,
        isLoggout: true,
        errors: null,
      };
    default:
      return state;
  }
};

export default fetchShoppingBasket;

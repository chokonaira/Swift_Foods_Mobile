import * as types from "../actions/index";

const initialState = {
  basket: {},
  isBasketCreated: false,
  basketFetched: false,
  loading: false,
  errors: null,
  isError: false,
  isLoggout: false,
};

const createShoppingBasket = (state = initialState, action) => {
  switch (action.types) {
    case types.BASKET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case types.CREATE_BASKET_SUCCESS:
      return {
        ...state,
        basket: actions.payload,
        loading: false,
        isBasketCreated: true,
      };
    case types.CREATE_BASKET_FAILURE:
      return {
        ...state,
        errors: actions.payload,
        loading: false,
        isError: true,
      };
    case types.FETCH_BASKET_SUCCESS:
      return {
        ...state,
        basket: actions.payload,
        loading: false,
        basketFetched: true,
      };
    case types.FETCH_BASKET_FAILURE:
      return {
        ...state,
        errors: actions.payload,
        loading: false,
        isError: true,
        basketFetched: false,
      };
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        basket: null,
        loading: false,
        isBasketCreated: false,
        isLoggout: true,
      };
    default:
      return state;
  }
};

export default createShoppingBasket;

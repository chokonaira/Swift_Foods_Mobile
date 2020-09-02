import * as types from "../actions/index";

const initialState = {
  basket: [],
  isBasketCreated: false,
  loading: false,
  errors: {},
  isError: false,
  isLoggout: false,
};

const createShoppingBasket = (state = initialState, action) => {
  switch (action.type) {
    case types.BASKET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case types.CREATE_BASKET_SUCCESS:
      return {
        ...state,
        basket: action.payload,
        loading: false,
        isBasketCreated: true,
      };
    case types.CREATE_BASKET_FAILURE:
      return {
        ...state,
        errors: action.payload,
        loading: false,
        isError: true,
      };
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        basket: null,
        loading: false,
        isBasketCreated: false,
        isLoggout: true,
        errors: null,
      };
    default:
      return state;
  }
};

export default createShoppingBasket;

import * as types from "../actions/index";

const initialState = {
  basket: null,
  isBasketCreated: false,
  loading: false,
  errors: null,
  isError: false
};

export const createShoppingBasket = (state = initialState, actions) => {
  switch (actions.types) {
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
        isError: false,
      };
    case types.CREATE_BASKET_FAILURE:
      return {
        ...state,
        errors: actions.payload,
        loading: false,
        isError: true,
        isBasketCreated: false,
      };
  }
};

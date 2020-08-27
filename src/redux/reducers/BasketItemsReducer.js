import * as types from "../actions";

const initialState = {
  basketItem: {},
  loading: false,
  error: {},
  isItemAdded: false,
  istemDeleted: false,
  isError: false,
};

export const basketItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.BASKET_ITEM_LOADING:
      return {
        ...state,
        loading: true,
      };
    case types.ADD_A_BASKET_ITEM_SUCCESS:
      return {
        ...state,
        basketItem: action.payload,
        loading: false,
        isItemAdded: true,
      };
    case types.ADD_A_BASKET_ITEM_FAILURE:
      return {
        ...state,
        errors: action.payload,
        loading: false,
        isError: true,
      };
    case types.DELETE_A_BASKET_ITEM_SUCCESS:
      return {
        ...state,
        basketItem: action.payload,
        loading: false,
        istemDeleted: true,
      };
    case types.DELETE_A_BASKET_ITEM_FAILURE:
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

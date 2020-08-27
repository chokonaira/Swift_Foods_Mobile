import * as types from "./index";
import axios from "axios";

const baseUrl = "https://choko-swift-foods-backend.herokuapp.com";

const basketItemLoading = () => ({
  type: types.BASKET_ITEM_LOADING,
});

const addBasketItemSuccess = (payload) => ({
  type: types.ADD_A_BASKET_ITEM_SUCCESS,
  payload,
});

const addBasketItemError = (payload) => ({
  type: types.ADD_A_BASKET_ITEM_FAILURE,
  payload,
});

const deleteBasketItemSuccess = (payload) => ({
  type: types.DELETE_A_BASKET_ITEM_SUCCESS,
  payload,
});

const deleteBasketItemError = (payload) => ({
  type: types.DELETE_A_BASKET_ITEM_FAILURE,
  payload,
});

const deleteAllBasketItemsSuccess = (payload) => ({
  type: types.DELETE_ALL_BASKET_ITEM_SUCCESS,
  payload,
});

const deleteAllBasketItemsError = (payload) => ({
  type: types.DELETE_ALL_BASKET_ITEM_FAILURE,
  payload,
});

export const addBasketItem = (payload, token) => (dispatch) => {
  dispatch(basketItemLoading());
  headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  axios
    .post(`${baseUrl}/basket_items/add`, payload, { headers })
    .then((response) => {
      dispatch(addBasketItemSuccess(response.data));
    })
    .catch((error) => {
      dispatch(addBasketItemError({ message: error.message }));
    });
};

export const deleteBasketItem = (basketItemId, token) => (dispatch) => {
  dispatch(basketItemLoading());
  headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  axios
    .delete(`${baseUrl}/basket_items/${basketItemId}`, { headers })
    .then((response) => {
      dispatch(deleteBasketItemSuccess(response.data));
    })
    .catch((error) => {
      dispatch(deleteBasketItemError({ message: error.message }));
    });
};

export const deleteAllBasketItems = (basketId, token) => (dispatch) => {
  dispatch(deleteAllBasketItemsLoading());
  headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  axios
    .delete(`${baseUrl}/basket_items/${basketId}`, { headers })
    .then((response) => {
      dispatch(deleteAllBasketItemsSuccess(response.data));
    })
    .catch((error) => {
      dispatch(deleteAllBasketItemsError({ message: error.message }));
    });
};

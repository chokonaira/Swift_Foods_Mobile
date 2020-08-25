import * as types from "./index";
import axios from "axios";

const baseUrl = "https://choko-swift-foods-backend.herokuapp.com";

const basketLoading = () => ({
  type: types.BASKET_LOADING,
});

const createbasketSuccess = (payload) => ({
  type: types.CREATE_BASKET_SUCCESS,
  payload,
});

const createBasketFailure = (payload) => ({
  type: types.CREATE_BASKET_FAILURE,
  payload,
});

const fetchbasketSuccess = (payload) => ({
  type: types.CREATE_BASKET_SUCCESS,
  payload,
});

const fetchBasketFailure = (payload) => ({
  type: types.CREATE_BASKET_FAILURE,
  payload,
});

export const createShoppingBasket = (userId) => (dispatch) => {
  dispatch(basketLoading());
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MywiZW1haWwiOiJjaG9AZ21haWwuY29tIiwiZXhwIjoxNTk4NDM0NjM0fQ.E09zplU--WAr2x7Kxr6_mesHUrlY-UXf7V2qliCKnpo`,
  };
  axios
    .post(`${baseUrl}/baskets/create/${userId}`, { headers })
    .then((response) => {
      dispatch(createbasketSuccess(response.data));
    })
    .catch((error) => {
      dispatch(createBasketFailure({ message: error.message }));
    });
};

export const getShoppingBasket = (userId, basketId, token) => (dispatch) => {
  dispatch(basketLoading());
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  axios
    .get(`${baseUrl}/baskets/${userId}/${basketId}`, { headers })
    .then((response) => {
      dispatch(fetchbasketSuccess(response.data));
    })
    .catch((error) => {
      dispatch(fetchBasketFailure({ message: error.message }));
    });
};

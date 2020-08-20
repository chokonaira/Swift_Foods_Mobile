import * as types from "./index";
import axios from 'axios';

const baseUrl = "https://choko-swift-foods-backend.herokuapp.com";

const basketLoading = () => ({
  type: types.BASKET_LOADING
})

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

export const createShoppingBasket =(userId, token) => (dispatch) => {
  dispatch(basketLoading());
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  }
  console.log(token, 'iiiiiiiiiiiiii')
  console.log(userId, 'uuuuuuuuuuuuu')

  axios
  .post(`${baseUrl}/baskets/create/${userId}`, {headers})
  .then(response => {
    dispatch(createbasketSuccess(response.data));
  })
  .catch((error) => {
    dispatch(createBasketFailure(error))
  });
}

export const getShoppingBasket =(userId, basketId, token) => (dispatch) => {
  dispatch(basketLoading());
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  }
  console.log(token, 'token')
  console.log(userId, 'userId')

  axios
  .get(`${baseUrl}/baskets/${userId}/${basketId}`, {headers})
  .then(response => {
    dispatch(fetchbasketSuccess(response.data));
  })
  .catch((error) => {
    dispatch(fetchBasketFailure(error))
  });
}
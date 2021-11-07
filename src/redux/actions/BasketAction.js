import * as types from './index';
import axios from 'axios';

const baseUrl = 'https://choko-swift-foods-backend.herokuapp.com';
// const local = "http://127.0.0.1:3000";

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
  type: types.FETCH_BASKET_SUCCESS,
  payload,
});

const fetchBasketFailure = (payload) => ({
  type: types.FETCH_BASKET_FAILURE,
  payload,
});

export const createShoppingBasket = (userId, token) => (dispatch) => {
  dispatch(basketLoading());
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };
  axios
    .post(`${baseUrl}/baskets/create/${userId}`, null, { headers })
    .then((response) => {
      dispatch(createbasketSuccess(response.data));
      const {
        basket: { id: basketId },
      } = response.data;
      dispatch(getShoppingBasket(userId, basketId, token));
    })
    .catch((error) => {
      dispatch(createBasketFailure({ message: error.message }));
    });
};

export const getShoppingBasket = (userId, basketId, token) => (dispatch) => {
  dispatch(basketLoading());
  const headers = {
    'Content-Type': 'application/json',
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

import * as types from './index';
import axios from 'axios';

const baseUrl = 'https://choko-swift-foods-backend.herokuapp.com';

const fetchFoodLoading = () => ({
  type: types.FETCH_FOOD_LOADING,
});

const fetchFoodSuccess = (payload) => ({
  type: types.FETCH_FOOD_SUCCESS,
  payload,
});

const fetchFoodError = (payload) => ({
  type: types.FETCH_FOOD_FAILURE,
  payload,
});

export const fetchAllProducts = (token) => (dispatch) => {
  dispatch(fetchFoodLoading());
  headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };

  axios
    .get(`${baseUrl}/products`, { headers })
    .then((response) => {
      dispatch(fetchFoodSuccess(response.data));
    })
    .catch((error) => {
      dispatch(fetchFoodError({ message: error.message }));
    });
};


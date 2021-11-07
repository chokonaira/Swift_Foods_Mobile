import * as types from './index';
import axios from 'axios';

const baseUrl = 'https://choko-swift-foods-backend.herokuapp.com';

const fetchACategoryLoading = () => ({
  type: types.FETCH_A_CATEGORY_LOADING,
});

const fetchACategorySuccess = (payload) => ({
  type: types.FETCH_A_CATEGORY_SUCCESS,
  payload,
});

const fetchACategoryError = (payload) => ({
  type: types.FETCH_A_CATEGORY_FAILURE,
  payload,
});

const fetchAllCategoryLoading = () => ({
  type: types.FETCH_ALL_CATEGORY_LOADING,
});

const fetchAllCategorySuccess = (payload) => ({
  type: types.FETCH_ALL_CATEGORY_SUCCESS,
  payload,
});

const fetchAllCategoryError = (payload) => ({
  type: types.FETCH_ALL_CATEGORY_FAILURE,
  payload,
});

export const fetchACategory = (categoryId, token) => (dispatch) => {
  dispatch(fetchACategoryLoading());
  headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };

  axios
    .get(`${baseUrl}/products/categories/${categoryId}`, { headers })
    .then((response) => {
      dispatch(fetchACategorySuccess(response.data));
    })
    .catch((error) => {
      dispatch(fetchACategoryError({ message: error.message }));
    });
};

export const fetchAllCategory = (token) => (dispatch) => {
  dispatch(fetchAllCategoryLoading());
  headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };

  axios
    .get(`${baseUrl}/products/categories`, { headers })
    .then((response) => {
      dispatch(fetchAllCategorySuccess(response.data));
    })
    .catch((error) => {
      dispatch(fetchAllCategoryError({ message: error.message }));
    });
};


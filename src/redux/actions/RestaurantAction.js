import * as types from "./index";
import axios from "axios";

const baseUrl = "https://choko-swift-foods-backend.herokuapp.com";

const fetchCategoriesByRestaurantsLoading = () => ({
  type: types.FETCH_A_RESTAURANT_LOADING,
});

const fetchCategoriesRestaurantsBySuccess = (payload) => ({
  type: types.FETCH_A_RESTAURANT_SUCCESS,
  payload,
});

const fetchCategoriesRestaurantsError = (payload) => ({
  type: types.FETCH_A_RESTAURANT_FAILURE,
  payload,
});

const fetchAllRestaurantsLoading = () => ({
  type: types.FETCH_ALL_RESTAURANTS_LOADING,
});

const fetchAllRestaurantsSuccess = (payload) => ({
  type: types.FETCH_ALL_RESTAURANTS_SUCCESS,
  payload,
});

const fetchAllRestaurantsError = (payload) => ({
  type: types.FETCH_ALL_RESTAURANTS_FAILURE,
  payload,
});

export const fetchCategoriesByRestaurants = (restaurantId, token) => (dispatch) => {
  dispatch(fetchCategoriesByRestaurantsLoading());
  headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  axios
    .get(`${baseUrl}/restaurants/${restaurantId}`, { headers })
    .then((response) => {
      dispatch(fetchCategoriesRestaurantsBySuccess(response.data));
    })
    .catch((error) => {
      dispatch(fetchCategoriesRestaurantsError({ message: error.message }));
    });

export const fetchAllRestaurants = (token) => (dispatch) => {
  dispatch(fetchAllRestaurantsLoading());
  headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  axios
    .get(`${baseUrl}/restaurants`, { headers })
    .then((response) => {
      dispatch(fetchAllRestaurantsSuccess(response.data));
    })
    .catch((error) => {
      dispatch(fetchAllRestaurantsError({ message: error.message }));
    });
};

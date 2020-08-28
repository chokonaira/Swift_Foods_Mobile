import * as types from "./index";
import axios from "axios";

const baseUrl = "https://choko-swift-foods-backend.herokuapp.com";

const fetchARestaurantLoading = () => ({
  type: types.FETCH_A_RESTAURANT_LOADING,
});

const fetchARestaurantSuccess = (payload) => ({
  type: types.FETCH_A_RESTAURANT_SUCCESS,
  payload,
});

const fetchARestaurantError = (payload) => ({
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

export const fetchARestaurant = (restaurantId, token) => (dispatch) => {
  dispatch(fetchARestaurantLoading());
  headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  axios
    .get(`${baseUrl}/restaurants/${restaurantId}`, { headers })
    .then((response) => {
      dispatch(fetchARestaurantSuccess(response.data));
    })
    .catch((error) => {
      dispatch(fetchARestaurantError({ message: error.message }));
    });
  }

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

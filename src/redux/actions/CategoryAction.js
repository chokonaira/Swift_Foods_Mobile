import * as types from "./index";
import axios from "axios";

const baseUrl = "https://choko-swift-foods-backend.herokuapp.com";

const fetchAProductsByCategoryLoading = () => ({
  type: types.FETCH_A_CATEGORY_LOADING,
});

const fetchAProductsByCategorySuccess = (payload) => ({
  type: types.FETCH_A_CATEGORY_SUCCESS,
  payload,
});

const fetchAProductsByCategoryError = (payload) => ({
  type: types.FETCH_A_CATEGORY_FAILURE,
  payload,
});

export const fetchAProductsByCategory = (categoryId, token) => (dispatch) => {
  dispatch(fetchAProductsByCategoryLoading());
  headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  axios
    .get(`${baseUrl}/products/categories/${categoryId}`, { headers })
    .then((response) => {
      dispatch(fetchAProductsByCategorySuccess(response.data));
    })
    .catch((error) => {
      dispatch(fetchAProductsByCategoryError({ message: error.message }));
    });
};


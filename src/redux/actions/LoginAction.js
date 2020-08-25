import * as types from "./index";
import axios from "axios";
const baseUrl = "https://choko-swift-foods-backend.herokuapp.com";
// const local = "http://127.0.0.1:3000";

const loginUserLoading = () => ({
  type: types.LOGIN_LOADING,
});

const loginUserSuccessful = (payload) => ({
  type: types.LOGIN_SUCCESS,
  payload,
});

const loginUserFailure = (payload) => ({
  type: types.LOGIN_FAILURE,
  payload,
});

export const loginUser = (payload) => (dispatch) => {
  dispatch(loginUserLoading());
  axios
    .post(`${baseUrl}/login`, payload)
    .then((response) => {
      dispatch(loginUserSuccessful(response.data));
    })
    .catch((error) => {
      dispatch(loginUserFailure({ message: error.message }));
    });
};

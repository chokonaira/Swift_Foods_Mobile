import * as types from "./index";
import axios from "axios";

const baseUrl = "https://choko-swift-foods-backend.herokuapp.com/";

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

export const loginUserAction = (userData) => (dispatch) => {
  dispatch(loginUserLoading());
  axios
    .post(`${baseUrl}/login`, userData)
    .then((res) => {
      dispatch(loginUserSuccessful(res));
    })
    .catch((error) => {
      dispatch(loginUserFailure(error));
    });
};

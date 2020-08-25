import * as types from "./index";
import axios from "axios";

const baseUrl = "https://choko-swift-foods-backend.herokuapp.com";

const registerUserLoading = () => ({
  type: types.REGISTER_LOADING,
});

const registerUserSuccess = (payload) => ({
  type: types.REGISTER_SUCCESS,
  payload,
});

const registerUserFailure = (payload) => ({
  type: types.REGISTER_FAILURE,
  payload,
});
export const registerUser = (newUserData) => (dispatch) => {
  dispatch(registerUserLoading());
  axios
    .post(`${baseUrl}/signup`, newUserData)
    .then((response) => {
      dispatch(registerUserSuccess(response.data));
    })
    .catch((error) => {
      console.log(error.message, "error");
      dispatch(registerUserFailure({ message: error.message }));
    });
};

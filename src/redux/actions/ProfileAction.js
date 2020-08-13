import * as types from "./index";
import axios from "axios";

const baseUrl = "https://choko-swift-foods-backend.herokuapp.com";
const token = "knknknkknkk";
const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
};

const profileLoading = () => ({
  type: types.PROFILE_LOADING,
});

const profileSuccess = (userId) => ({
  type: types.PROFILE_LOADING,
  payload: userId,
});

const profileFailure = (userId) => ({
  type: types.PROFILE_FAILURE,
  payload: userId,
});

export const userProfile = (userId) => (dispatch) => {
  dispatch(profileLoading());
  axios
    .get(`${baseUrl}/profile/${userId}`, { headers })
    .then((response) => {
      dispatch(profileSuccess(response));
    })
    .catch((error) => {
      dispatch(profileFailure(error));
    });
};
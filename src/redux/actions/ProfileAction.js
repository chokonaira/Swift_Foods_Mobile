import * as types from "./index";
import axios from "axios";

const baseUrl = "https://choko-swift-foods-backend.herokuapp.com";
// const local = "http://127.0.0.1:3000";

const profileLoading = () => ({
  type: types.PROFILE_LOADING,
});

const profileSuccess = (payload) => ({
  type: types.PROFILE_SUCCESS,
  payload,
});

const profileFailure = (payload) => ({
  type: types.PROFILE_FAILURE,
  payload,
});

export const userProfile = (userId, token) => (dispatch) => {
  dispatch(profileLoading());
  headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  axios
    .get(`${baseUrl}/profile/${userId}`, { headers })
    .then((response) => {
      dispatch(profileSuccess(response.data));
    })
    .catch((error) => {
      dispatch(profileFailure({ message: error.message }));
    });
};

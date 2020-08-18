import * as types from "./index";
import axios from "axios";


const baseUrl = "https://choko-swift-foods-backend.herokuapp.com";

const profileLoading = () => ({
  type: types.PROFILE_LOADING,
});

const profileSuccess = (userId) => ({
  type: types.PROFILE_SUCCESS,
  payload: userId,
});

const profileFailure = (userId) => ({
  type: types.PROFILE_FAILURE,
  payload: userId,
});




export const userProfile = (userId, token) => (dispatch) => {
  dispatch(profileLoading());
  headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  axios
    .get(`${baseUrl}/profile/${userId}`, {headers})
    .then((response) => {
      dispatch(profileSuccess(response.data));
    })
    .catch((error) => {
      dispatch(profileFailure(error));
    });
};
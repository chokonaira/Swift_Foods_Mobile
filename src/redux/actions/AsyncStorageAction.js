import AsyncStorage from "@react-native-community/async-storage";
import * as types from "./index"

export const getToken = (token) => ({
  type: types.GET_TOKEN,
  token,
});

export const saveToken = (token) => ({
  type: types.SAVE_TOKEN,
  token,
});

export const removeToken = () => ({
  type: types.REMOVE_TOKEN,
});

export const loading = () => ({
  type: types.ASYNC_STORAGE_LOADING,
});

export const error = (error) => ({
  type: types.ASYNC_STORAGE_ERROR,
  error,
});

export const getUserToken = () => (dispatch) =>
  AsyncStorage.getItem("token")
    .then((data) => {
      dispatch(loading(false));
      dispatch(getToken(data));
    })
    .catch((err) => {
      dispatch(loading(false));
      dispatch(error(err.message || "ERROR"));
    });

export const saveUserToken = (data) => (dispatch) =>
  AsyncStorage.setItem("token", data)
    .then((data) => {
      dispatch(loading(false));
      dispatch(saveToken("token saved"));
    })
    .catch((err) => {
      dispatch(loading(false));
      dispatch(error(err.message || "ERROR"));
    });

export const removeUserToken = () => (dispatch) =>
  AsyncStorage.removeItem("token")
    .then((data) => {
      dispatch(loading(false));
      dispatch(removeToken(data));
    })
    .catch((err) => {
      dispatch(loading(false));
      dispatch(error(err.message || "ERROR"));
    });

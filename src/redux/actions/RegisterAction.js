import * as types from './index';
import axios from 'axios';
import { showMessage } from 'react-native-flash-message';

const baseUrl = 'https://choko-swift-foods-backend.herokuapp.com';

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
      showMessage({
        message: 'Registration succesfull, Login',
        type: 'success',
      });
    })
    .catch((error) => {
      dispatch(registerUserFailure({ message: error.message }));
      showMessage({
        message: 'Opps something went wrong, try again',
        type: 'danger',
      });
    });
};

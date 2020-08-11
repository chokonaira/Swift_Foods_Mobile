import * as types from './index';
import axios from 'axios';
import {pressHandlerLogin} from '../../screens/RegisterScreen/'


const baseUrl = "https://choko-swift-foods-backend.herokuapp.com/"
// const headers = {
//   'Content-Type': 'application/json',
// }

const registerUserLoading = () => ({
  type: types.REGISTER_LOADING
})

const registerUserSuccess = payload => ({
  type: types.REGISTER_SUCCESS,
  payload
})

// const registerUserFailure= payload => ({
//   type: types.REGISTER_FAILURE,
//   payload
// })
export const registerUser = newUserData => (dispatch) => {
  dispatch(registerUserLoading());
  axios
  .post(`${baseUrl}/signup`, newUserData)
  .then(res => {
    dispatch(registerUserSuccess(res))
  }).catch(error => {
    console.log(error, 'error');
    // dispatch(registerUserFailure({message: error.response.data}))
  })
}
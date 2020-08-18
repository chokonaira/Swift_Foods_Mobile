import * as types from "./index";
import axios from 'axios';

const baseUrl = "https://choko-swift-foods-backend.herokuapp.com";

const basketLoading = () => ({
  type: types.BASKET_LOADING
})

const createbasketSuccess = (payload) => ({
  type: types.CREATE_BASKET_SUCCESS,
  payload,
});

const createBasketFailure = (payload) => ({
  type: types.CREATE_BASKET_FAILURE,
  payload,
});


export const createShoppingBasket =(userId, token) => (dispatch) => {
  dispatch(basketLoading());
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  }

  axios
  .post(`${baseUrl}/profile/image/${userId}`, {headers})
  .then(response => {
    dispatch(createbasketSuccess(response));
  })
  .catch((error) => {
    dispatch(createBasketFailure(error))
  });
}

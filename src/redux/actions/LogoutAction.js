import * as types from './index';
import { clearData } from '../../helpers/asyncStorage';
import { showMessage } from 'react-native-flash-message';

const logoutUserSuccessful = () => ({
  type: types.LOGOUT_SUCCESS,
});


export const logoutUser = () => (dispatch) => {
  try {
     clearData()
    .then(dispatch(logoutUserSuccessful()));
    showMessage({
      message: 'Logout succesfull',
      type: 'success',
    }); 
  } catch (e) {
    console.log(e, 'error');
  }
};

import * as types from "./index";
import { showMessage } from "react-native-flash-message";
import AsyncStorage from "@react-native-community/async-storage";

const logoutUserSuccessful = () => ({
  type: types.LOGOUT_SUCCESS,
});

const clearData = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    console.log(e, "error");
  }
};


export const logoutUser = () => (dispatch) => {
  try {
     clearData()
    .then(dispatch(logoutUserSuccessful()))
    showMessage({
      message: "Logout succesfull",
      type: "success",
    }); 
  } catch(e) {
    console.log(e, 'error')
  }
}
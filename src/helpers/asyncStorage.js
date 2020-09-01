import AsyncStorage from "@react-native-community/async-storage";
import { showMessage } from "react-native-flash-message";
import { logoutUser } from "../redux/actions/LogoutAction";
import jwtDecode from "jwt-decode";
import { store } from "../redux/store";

export const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.log(e, "error");
  }
};

export const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    console.log(jsonValue, "jsonValue");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e, "error");
  }
};

export const clearData = async () => {
  try {
    await AsyncStorage.clear();
    showMessage({
      message: "Logout succesfull",
      type: "success",
    });
  } catch (e) {
    console.log(e, "error");
  }
};


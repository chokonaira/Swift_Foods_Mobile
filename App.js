import React from "react";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import Navigator from './src/routes/RootRoutes';
import { YellowBox, StatusBar } from "react-native";
YellowBox.ignoreWarnings(["Remote debugger"]);
import FlashMessage from "react-native-flash-message";


export default function App() {
  return (
    <>
    <StatusBar barStyle='default-content' />
    <Provider store={store}>
      <Navigator/>
      <FlashMessage position="top" />
    </Provider>
    </>
  );
}

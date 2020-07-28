import React from "react";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import Navigator from './src/routes/RootRoutes';
import { YellowBox, StatusBar } from "react-native";
YellowBox.ignoreWarnings(["Remote debugger"]);


export default function App() {
  return (
    <>
    <StatusBar barStyle='light-content' />
    <Provider store={store}>
      <Navigator/>
    </Provider>
    </>
  );
}

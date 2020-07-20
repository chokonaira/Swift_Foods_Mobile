import React from "react";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import Navigator from './src/routes/Routes';
import { YellowBox } from "react-native";
YellowBox.ignoreWarnings(["Remote debugger"]);


export default function App() {
  return (
    <Provider store={store}>
      <Navigator/>
    </Provider>
  );
}

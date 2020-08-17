import React, { Component } from "react";
import { Provider } from "react-redux";
import { store, persistor } from "./src/redux/store";
import { YellowBox } from "react-native";
YellowBox.ignoreWarnings(["Remote debugger"]);
import Main from "./src/Main";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  );
}

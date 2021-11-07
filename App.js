import React from "react";
import { Provider } from "react-redux";
import { store, persistor } from "./src/redux/store";
import { StatusBar } from "react-native";
import Navigator from "./src/routes/RootRoutes";
import FlashMessage from "react-native-flash-message";

import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  return (
    <React.Fragment>
    <StatusBar barStyle="light-content" />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigator />
        <FlashMessage position="top" />
      </PersistGate>
    </Provider>
   </React.Fragment>
  );
}

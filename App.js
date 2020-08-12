import React, { Component } from "react";
import { Provider } from "react-redux";
import { store, persistor } from "./src/redux/store";
import Navigator from "./src/routes/RootRoutes";
import { YellowBox, StatusBar } from "react-native";
YellowBox.ignoreWarnings(["Remote debugger"]);
import FlashMessage from "react-native-flash-message";
import { PersistGate } from "redux-persist/integration/react";
import Spinner from "react-native-loading-spinner-overlay";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    console.log(this.props, "this.props");
  }

  render() {
    return (
      <React.Fragment>
        <StatusBar barStyle="default-content" />
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Navigator />
            <FlashMessage position="top" />
          </PersistGate>
        </Provider>
      </React.Fragment>
    );
  }
}

export default App;

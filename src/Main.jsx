import React, { Component } from "react";
import Navigator from "./routes/RootRoutes";
import { YellowBox, StatusBar } from "react-native";
YellowBox.ignoreWarnings(["Remote debugger"]);
import FlashMessage from "react-native-flash-message";


class Main extends Component{

  render() {
    return (
      <React.Fragment>
        <StatusBar barStyle="light-content" />
          <Navigator />
          <FlashMessage position="top" />
      </React.Fragment>
    );
  }
}


export default Main;

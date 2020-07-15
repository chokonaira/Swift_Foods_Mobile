import React from 'react';
import {Provider} from "react-redux";
import { NativeRouter, Route } from "react-router-native";
import Welcome from './src/screens/WelcomeScreen.jsx';
import store from './src/redux/store';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Remote debugger']);


export default function App() {
  return (
    <Provider store={store}>
      <NativeRouter>
        <Route exact path="/" component={Welcome} />
      </NativeRouter>
    </Provider>
  );
}

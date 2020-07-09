import React from 'react';
import { NativeRouter, Route } from "react-router-native";
import Welcome from './src/Pages/WelcomePage';


export default function App() {
  return (
    <NativeRouter>
      <Route exact path="/" component={Welcome} />
    </NativeRouter>
  );
}

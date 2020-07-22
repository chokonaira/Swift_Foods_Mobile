import React from 'react';
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/HomeScreen";
import Header from "../components/Card"



const screens = {
  Home:{
    screen: HomeScreen,
    navigationOptions:{
      headerTitle: () => <Header/>
      // title: " ",
      // headerStyle: { height:0}
    }
  },
  Profile:{
    screen: ProfileScreen,
    navigationOptions:{
      title: "Update Profile"
    }
  }
}

const HomeRoutes = createStackNavigator(screens, {
  defaultNavigationOptions:{
    headerTintColor: '#444',
    headerStyle: {backgroundColor: 'red'}
  }
});
export default HomeRoutes;
import { createAppContainer } from "react-navigation";
import TabRoutes from './TabRoutes';
import StackRoutes from './StackRoutes';
import React from 'react'
import ShoppingCartIcon from '../components/ShoppingCartIcon';

// import DrawerRoutes from './DrawerRoute';
// import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createStackNavigator } from "react-navigation-stack";


const RootNavigator = createStackNavigator({
  Home: {
    screen: StackRoutes,
    navigationOptions: {
      title: " ",
      headerStyle: { height: 0 },
    }
  },
  // Login: {
  //   screen: Routes
  // },
  // Register: {
  //   screen: Routes
  // },
  Dashboard: {
    screen: TabRoutes,
    navigationOptions: {
      title: "Swift Foods",
      headerRight: () => <ShoppingCartIcon/>,
      headerStyle: { backgroundColor: "#f0a500" },
      // headerTintColor: "#fff",
      // headerStyle: { height: 4 },
    },
  },
  // Restaurant: {
  //   screen: DrawerRoutes,
  // },
  // Cart: {
  //   screen: TabRoutes
  // },
  // Category: {
  //   screen: TabRoutes
  // },
  // Profile: {
  //   screen: TabRoutes
  // }
})

export default createAppContainer(RootNavigator);



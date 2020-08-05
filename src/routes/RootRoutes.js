import { createAppContainer } from "react-navigation";
import TabRoutes from './TabRoutes';
import StackRoutes from './StackRoutes';
import DrawerRoutes from './DrawerRoute';

import React from 'react'
import ShoppingCartIcon from '../components/ShoppingCartIcon';
import HeaderLogo from '../components/HeaderLogo';

// import {createDrawerNavigator} from 'react-navigation-drawer'

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
  About: {
    screen: DrawerRoutes,
  },
  // Register: {
  //   screen: Routes
  // },
  Dashboard: {
    screen: TabRoutes,
    navigationOptions: ({navigation}) => {
      return {
        title: "",
        headerLeft: () => <HeaderLogo navigation={navigation}/>,
        headerRight: () => <ShoppingCartIcon navigation={navigation}/>,
        headerStyle: { backgroundColor: "#f0a500" },
      }
      
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



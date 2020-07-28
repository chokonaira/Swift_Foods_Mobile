import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import DashboardScreen from "../screens/DashboardScreen";
import RestaurantScreen from "../screens/RestaurantsScreen";
import CartScreen from "../screens/ShoppingCartScreen";
import CategoryScreen from "../screens/CategoryScreen";
import ProfileScreen from "../screens/ProfileScreen";
import React from "react";
import { GlobalStyles } from "../styles/globalStyles";
import {View} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5'

const screens = {
  // Home: {
  //   screen: HomeScreen,
  //   navigationOptions: {
  //     title: " ",
  //     headerStyle: { height: 0 },
  //   },
  // },
  // Login: {
  //   screen: LoginScreen,
  // },
  // Register: {
  //   screen: RegisterScreen,
  // },
  Dashboard: {
    screen: DashboardScreen,
    navigationOptions: {
      tabBarLabel: "Meals",
      tabBarIcon: ({tintColor}) => (
        <View>
          <Icon style={[{color: tintColor}]} size={20} name={'hamburger'}/>
        </View>
      )
    },
  },
  Restaurant: {
    screen: RestaurantScreen,
    navigationOptions: {
      tabBarLabel: "Restaurant",
      tabBarIcon: ({tintColor}) => (
        <View>
          <Icon style={[{color: tintColor}]} size={20} name={'hotel'}/>
        </View>
      )
    },
  },
  Cart: {
    screen: CartScreen,
    navigationOptions: {
      tabBarLabel: "Cart",
      tabBarIcon: ({tintColor}) => (
        <View>
          <Icon style={[{color: tintColor}]} size={20} name={'cart-arrow-down'}/>
        </View>
      )
    },
  },
  Category: {
    screen: CategoryScreen,
    navigationOptions: {
      tabBarLabel: "Category",
      tabBarIcon: ({tintColor}) => (
        <View>
          <Icon style={[{color: tintColor}]} size={20} name={'th'}/>
        </View>
      )
    },
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: "Profile",
      tabBarIcon: ({tintColor}) => (
        <View>
          <Icon style={[{color: tintColor}]} size={25} name={'user'}/>
        </View>
      )
    },
  }
};

const TabRoutes = createMaterialBottomTabNavigator(screens, {
  // initialRouteName: 'Dashboard',
    activeColor: 'white',
    inactiveColor: 'black',
    barStyle: {backgroundColor: '#f0a500'}
  }
);
export default TabRoutes;

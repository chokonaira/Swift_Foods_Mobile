import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import DashboardScreen from "../screens/DashboardScreen";
import RestaurantScreen from "../screens/RestaurantsScreen";
import CategoryScreen from "../screens/CategoryScreen";
import ProfileScreen from "../screens/ProfileScreen";
import React from "react";
import { GlobalStyles } from "../styles/globalStyles";
import { View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const screens = {
  Dashboard: {
    screen: DashboardScreen,
    navigationOptions: {
      tabBarLabel: "Meals",
      tabBarIcon: ({ tintColor }) => (
        <View>
          <Icon style={[{ color: tintColor }]} size={22} name={"hamburger"} />
        </View>
      ),
    },
  },
  Category: {
    screen: CategoryScreen,
    navigationOptions: {
      tabBarLabel: "Category",
      tabBarIcon: ({ tintColor }) => (
        <View>
          <Icon style={[{ color: tintColor }]} size={22} name={"th"} />
        </View>
      ),
    },
  },
  Restaurant: {
    screen: RestaurantScreen,
    navigationOptions: {
      tabBarLabel: "Restaurant",
      tabBarIcon: ({ tintColor }) => (
        <View>
          <Icon style={[{ color: tintColor }]} size={22} name={"hotel"} />
        </View>
      ),
    },
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: "Profile",
      tabBarIcon: ({ tintColor }) => (
        <View>
          <Icon style={[{color: tintColor }]} size={22} name={"user"} />
        </View>
      ),
    },
  },
};

const TabRoutes = createMaterialBottomTabNavigator(screens, {
  // initialRouteName: 'Dashboard',
  activeColor: '#ffbd69',
  inactiveColor: "#444",
  barStyle: { backgroundColor: "#fffdf9"},
});
export default TabRoutes;

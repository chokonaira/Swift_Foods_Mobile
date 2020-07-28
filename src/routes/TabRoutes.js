import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import DashboardScreen from "../screens/DashboardScreen";
import RestaurantScreen from "../screens/RestaurantsScreen";
import CartScreen from "../screens/ShoppingCartScreen";
import CategoryScreen from "../screens/CategoryScreen";
import ProfileScreen from "../screens/ProfileScreen";

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
      title: "Meals",
      headerStyle: { height: 0 },
    },
  },
  Restaurant: {
    screen: RestaurantScreen,
    
  },
  Cart: {
    screen: CartScreen,
  },
  Category: {
    screen: CategoryScreen,
  },
  Profile: {
    screen: ProfileScreen,
  }
};

const TabRoutes = createMaterialBottomTabNavigator(screens, {
  // initialRouteName: 'Dashboard',
    activeColor: 'black',
    inactiveColor: '#3e2465',
    barStyle: {backgroundColor: '#fff'}
  }
);
export default TabRoutes;

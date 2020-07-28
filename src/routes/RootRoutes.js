import { createAppContainer } from "react-navigation";
import TabRoutes from './TabRoutes';
import Routes from './StackRoutes';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createStackNavigator } from "react-navigation-stack";


const RootNavigator = createStackNavigator({
  Home: {
    screen: Routes,
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
      headerTintColor: "#fff",
      headerStyle: { backgroundColor: '#f0a500' },
    },
  },
  // Restaurant: {
  //   screen: TabRoutes,
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



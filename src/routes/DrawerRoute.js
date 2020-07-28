import {createDrawerNavigator} from 'react-navigation-drawer'
import HomeScreen from "../screens/HomeScreen";
import AboutScreen from "../screens/AboutScreen";
import RegisterScreen from "../screens/RegisterScreen";


const screens = {
  Home: {
    screen: HomeScreen,
  },
  About: {
    screen: AboutScreen,
  }
};

const DrawerRoutes = createDrawerNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#f0a500",
    headerStyle: { backgroundColor: "#f0a500" },
  },
});
export default DrawerRoutes;
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";

const screens = {
  Home:{
    screen: HomeScreen
  },
  Login:{
    screen: LoginScreen
  }
}

const Routes = createStackNavigator(screens);
export default createAppContainer(Routes)
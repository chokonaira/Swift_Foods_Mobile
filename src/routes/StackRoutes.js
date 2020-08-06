import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import EditProfileScreen from "../screens/EditProfileScreen";
import ProfileScreen from "../screens/EditProfileScreen";


const screens = {
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      // title: H,
      headerStyle: { height: 0 },
    },
  },
  Login: {
    screen: LoginScreen,
  },
  Register: {
    screen: RegisterScreen,
  },
  Profile: {
    screen: ProfileScreen,
  },
  ProfileForm: {
    screen: EditProfileScreen,
  },
};

const Routes = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#f0a500",
    headerStyle: { backgroundColor: "#f0a500" },
  },
});
export default Routes;

import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen"; 
import Register from "../screens/RegisterScreen"; 


const screens = {
  " ":{
    screen: HomeScreen,
    navigationOptions:{
      headerStyle: { height:0}
    }
  },
  Login:{
    screen: LoginScreen
  },
  Register:{
    screen: Register
  }
}

const Routes = createStackNavigator(screens, {
  defaultNavigationOptions:{
    headerTintColor: '#444',
    headerStyle: {backgroundColor: 'red'}
  }
});
export default createAppContainer(Routes)
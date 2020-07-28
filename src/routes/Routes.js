import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen"; 
import RegisterScreen from "../screens/RegisterScreen"; 
import DashboardScreen from "../screens/DashboardScreen";
import RestaurantScreen from "../screens/RestaurantsScreen"
import CartScreen from "../screens/ShoppingCartScreen";
import CategoryScreen from "../screens/CategoryScreen"
import ProfileScreen from "../screens/ProfileScreen"



const screens = {
  Home:{
    screen: HomeScreen,
    navigationOptions:{
      title:" ",
      headerStyle: { height:0}
    }
  },
  Login:{
    screen: LoginScreen
  },
  Register:{
    screen: RegisterScreen
  },
  Dashboard:{
    screen: DashboardScreen
  },
  Restaurant:{
    screen: RestaurantScreen
  },
  Cart:{
    screen: CartScreen
  },
  Category:{
    screen: CategoryScreen
  },
  Profile:{
    screen: ProfileScreen
  }
}

const Routes = createStackNavigator(screens, {
  defaultNavigationOptions:{
    headerTintColor: '#444',
    headerStyle: {backgroundColor: '#F0A500'}
  }
});
export default createAppContainer(Routes)
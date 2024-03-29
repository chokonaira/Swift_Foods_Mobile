import { createAppContainer } from 'react-navigation';
import TabRoutes from './TabRoutes';
import StackRoutes from './StackRoutes';
import React from 'react';
import ShoppingCartIcon from '../components/ShoppingCartIcon';
import HeaderLogo from '../components/HeaderLogo';
import { createStackNavigator } from 'react-navigation-stack';


const RootNavigator = createStackNavigator({
  Home: {
    screen: StackRoutes,
    navigationOptions: {
      title: ' ',
      headerStyle: { height: 0 },
    }
  },
  Dashboard: {
    screen: TabRoutes,
    navigationOptions: ({ navigation }) => ({
        title: '',
        headerLeft: () => <HeaderLogo navigation={navigation} />,
        headerRight: () => <ShoppingCartIcon navigation={navigation} />,
        headerStyle: { backgroundColor: '#f0a500' },
        tranparentCard: true
      }),
  },
  
});

export default createAppContainer(RootNavigator);

import React from 'react';
import {Router} from './router';
import {Home, Map, Restaurant} from '../screens';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
const AppNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={Router.Home}>
      <Stack.Screen name={Router.Home} component={Home} />
      <Stack.Screen name={Router.Restaurant} component={Restaurant} />
      <Stack.Screen name={Router.Map} component={Map} />
    </Stack.Navigator>
  );
};

export default AppNavigation;

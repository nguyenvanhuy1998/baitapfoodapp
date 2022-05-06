import React from 'react';
import {Router} from './router';
import {Home, Map, Restaurant} from '../screens';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import TabBarBottom from './TabBarBottom';
const Stack = createStackNavigator();
const screenOptions = {
  headerShown: false,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  gestureEnabled: true,
  gestureDirection: 'horizontal',
};
const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={Router.RootTab} component={TabBarBottom} />
      <Stack.Screen name={Router.Restaurant} component={Restaurant} />
      <Stack.Screen name={Router.Map} component={Map} />
    </Stack.Navigator>
  );
};

export default AppNavigation;

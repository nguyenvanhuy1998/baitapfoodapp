import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {Router} from './router';
import {Home} from '../screens';
import {icons, theme} from '../constants';
import Svg, {Path} from 'react-native-svg';
import {isIphoneX} from 'react-native-iphone-x-helper';
const Tab = createBottomTabNavigator();
const CustomTabBar = props => {
  if (isIphoneX()) {
    return (
      <View>
        <View style={styles.containerCustomTabBar} />
        <BottomTabBar {...props.props} />
      </View>
    );
  } else {
    return <BottomTabBar {...props.props} />;
  }
};
const TabBarCustomButton = ({accessibilityState, children, onPress}) => {
  var isSelected = accessibilityState.selected;
  if (isSelected) {
    return (
      <View style={styles.containerSVG}>
        <View style={styles.containerSVG_content}>
          <View style={styles.flexOne} />
          <Svg width={70} height={61} viewBox="0 0 75 61">
            <Path
              d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
              fill={theme.COLORS.white}
            />
          </Svg>
          <View style={styles.flexOne} />
        </View>

        <TouchableOpacity style={styles.elipse} onPress={onPress}>
          {children}
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <TouchableOpacity
        style={styles.btnUnSelected}
        activeOpacity={1}
        onPress={onPress}>
        {children}
      </TouchableOpacity>
    );
  }
};
const TabBarBottom = () => {
  return (
    <Tab.Navigator
      initialRouteName={Router.Home}
      tabBar={props => <CustomTabBar props={props} />}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor: 'transparent',
          elevation: 0,
        },
      }}>
      <Tab.Screen
        name={Router.Home}
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.cutlery}
              resizeMode="contain"
              style={styles.icon(focused)}
            />
          ),
          tabBarButton: props => <TabBarCustomButton {...props} />,
        }}
      />
      <Tab.Screen
        name={Router.Search}
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.search}
              resizeMode="contain"
              style={styles.icon(focused)}
            />
          ),
          tabBarButton: props => <TabBarCustomButton {...props} />,
        }}
      />
      <Tab.Screen
        name={Router.Like}
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.like}
              resizeMode="contain"
              style={styles.icon(focused)}
            />
          ),
          tabBarButton: props => <TabBarCustomButton {...props} />,
        }}
      />
      <Tab.Screen
        name={Router.User}
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.user}
              resizeMode="contain"
              style={styles.icon(focused)}
            />
          ),
          tabBarButton: props => <TabBarCustomButton {...props} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabBarBottom;

const styles = StyleSheet.create({
  icon(focused) {
    return {
      width: 25,
      height: 25,
      tintColor: focused ? theme.COLORS.primary : theme.COLORS.secondary,
    };
  },
  containerSVG: {
    flex: 1,
    alignItems: 'center',
  },
  containerSVG_content: {
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
  },
  flexOne: {
    flex: 1,
    backgroundColor: theme.COLORS.white,
  },
  elipse: {
    top: -22.5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: theme.COLORS.white,
  },
  btnUnSelected: {
    flex: 1,
    height: 60,
    backgroundColor: theme.COLORS.white,
  },
  containerCustomTabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 30,
    backgroundColor: theme.COLORS.white,
  },
});

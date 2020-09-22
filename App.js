import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from './src/constants/colors';

import HomeScreen from './src/screens/home';
import FavoritesScreen from './src/screens/favorites';
import SearchScreen from './src/screens/search';
import NotificationScreen from './src/screens/notification';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          keyboardHidesTabBar: true,
          showLabel: false,
          inactiveTintColor: colors.black,
          activeTintColor: colors.orange,
          style: {
            borderTopWidth: 0,
            elevation: 0,
          },
        }}>
        <Tab.Screen
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="home-outline" color={color} size={size} />
            ),
          }}
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="heart-outline" color={color} size={size} />
            ),
          }}
          name="Favorites"
          component={FavoritesScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="magnify" color={color} size={size} />
            ),
          }}
          name="Search"
          component={SearchScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="bell-outline" color={color} size={size} />
            ),
          }}
          name="Notifications"
          component={NotificationScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

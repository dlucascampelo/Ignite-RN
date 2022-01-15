import React from 'react';
import { Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import { useTheme } from 'styled-components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const { Navigator, Screen } = createBottomTabNavigator();

import { Dashboard } from '../screens/Dashboard';
import { Register } from '../screens/Register';
import { Resume } from '../screens/Resume';


export function AppRoutes() {
  const theme = useTheme()
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.secondary,
        tabBarInactiveTintColor: theme.colors.text,
        tabBarLabelPosition: 'beside-icon',
        tabBarStyle: {
          height: 70,
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
        }
      }}
    >
      <Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: (({ size, color }) =>
            <MaterialIcons name="format-list-bulleted" size={size} color={color}
            />
          )
        }}
      />

      <Screen
        name="Register"
        component={Register}
        options={{
          tabBarIcon: (({ size, color }) =>
            <MaterialIcons name="attach-money" size={size} color={color}
            />
          )
        }}
      />

      <Screen
        name="Resume"
        component={Resume}
        options={{
          tabBarIcon: (({ size, color }) =>
            <MaterialIcons name="pie-chart" size={size} color={color}
            />
          )
        }}
      />

    </Navigator>
  )
}
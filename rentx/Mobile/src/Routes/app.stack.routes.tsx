import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { CarDetails } from '../screens/CarDetails';
import { Scheduling } from '../screens/Scheduling';
import { ActionCompleted } from '../screens/ActionCompleted';
import { SchedulingDetails } from '../screens/SchedulingDetails';
import { MyCars } from '../screens/MyCars';


export function AppStackRoutes() {
  const { Navigator, Screen } = createNativeStackNavigator();
  return (
    <Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="MyCars" component={MyCars} />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Scheduling" component={Scheduling} />
      <Screen name="SchedulingDetails" component={SchedulingDetails} />
      <Screen name="ActionCompleted" component={ActionCompleted} />


    </Navigator>
  );
}
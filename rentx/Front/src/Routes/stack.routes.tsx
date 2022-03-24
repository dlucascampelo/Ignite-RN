import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Splash } from '../screens/Splash';
import { Home } from '../screens/Home';
import { CarDetails } from '../screens/CarDetails';
import { Scheduling } from '../screens/Scheduling';
import { ActionCompleted } from '../screens/ActionCompleted';
import { SchedulingDetails } from '../screens/SchedulingDetails';
import { MyCars } from '../screens/MyCars';
import { SignIn } from '../screens/SignIn';
import { SignUpFirstStep } from '../screens/SignUp/SignUpFirstStep';
import { SignUpSecondStep } from '../screens/SignUp/SignUpSecondStep';


export function StackRoutes() {
  const { Navigator, Screen } = createNativeStackNavigator();
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="SignIn"
    >
      {/* <Screen name="Splash" component={Splash} /> */}
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUpFirstStep" component={SignUpFirstStep} />
      <Screen name="SignUpSecondStep" component={SignUpSecondStep} />

      <Screen name="Home" component={Home}
        options={{
          gestureEnabled: false,
        }}
      />

      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Scheduling" component={Scheduling} />
      <Screen name="ActionCompleted" component={ActionCompleted} />
      <Screen name="SchedulingDetails" component={SchedulingDetails} />
      <Screen name="MyCars" component={MyCars} />


    </Navigator>
  );
}
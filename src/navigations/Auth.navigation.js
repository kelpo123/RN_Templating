import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import WelcomeScreen from 'screens/auth';
const Stack = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <>
      <Stack.Navigator initialRouteName="Welcome" headerMode="none">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
      </Stack.Navigator>
    </>
  );
};

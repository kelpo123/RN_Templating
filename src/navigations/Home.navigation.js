import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {TabNavigator} from './Tab.navigation';
import DetailMessage from 'screens/messages/detail';
const Stack = createStackNavigator();

export const HomeNavigator = () => {
  return (
    <>
      <Stack.Navigator initialRouteName="home" headerMode="none">
        <Stack.Screen name="Home" component={TabNavigator} />

        <Stack.Screen name="DetailMessage" component={DetailMessage} />
      </Stack.Navigator>
    </>
  );
};

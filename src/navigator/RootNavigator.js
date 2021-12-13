import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Home" />
        <RootStack.Screen name="Edit" />
        <RootStack.Screen name="Create" />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;

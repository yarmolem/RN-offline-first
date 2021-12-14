import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeView from '../views/HomeView';
import EditView from '../views/EditView';
import CreateView from '../views/CreateView';
import LoginView from '../views/LoginView';
import {useMeQuery} from '../generated/graphql';
import {Text, View} from 'react-native';

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
  const [{fetching}] = useMeQuery();

  if (fetching) {
    return (
      <View>
        <Text>CARGANDO ...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Login" component={LoginView} />
        <RootStack.Screen name="Home" component={HomeView} />
        <RootStack.Screen name="Edit" component={EditView} />
        <RootStack.Screen name="Create" component={CreateView} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;

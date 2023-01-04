import React from 'react';

import {View, Text, TouchableOpacity} from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import JobsScreen from './JobsScreen';

const Stack = createNativeStackNavigator();

export default MyMainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="JobsScreen" component={JobsScreen} />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTintColor: 'green',
            headerTitleAlign: 'center',
            title: 'Home Screen',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

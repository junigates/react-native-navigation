import React from 'react';

import {View, Text, TouchableOpacity} from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import JobsScreen from './JobsScreen';

const Stack = createNativeStackNavigator();

import AntDesign from 'react-native-vector-icons/AntDesign';

function LogoTitle() {
  return <AntDesign name="minus" style={{fontSize: 30, color: 'green'}} />;
}

export default MyMainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="JobsScreen"
          component={JobsScreen}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: 'orange',
            },
            headerBackTitleVisible: false,
            headerTitle: props => <LogoTitle {...props} />,
            headerTintColor: 'brown',
            headerTitleStyle: {
              color: 'white',
              fontSize: 30,
              fontWeight: 'bold',
            },
          }}
        />
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

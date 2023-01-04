import React from 'react';

import {View, Text, Pressable, TouchableOpacity} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default JobsScreen = ({route, navigation}) => {
  const {id, name} = route.params;

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.backgroundColor,
      }}>
      <Text>
        Hey my name is {name} and I am coming from home {id}
      </Text>
      <TouchableOpacity
        style={{padding: 20, backgroundColor: 'green'}}
        onPress={() => {
          navigation.push('JobsScreen', {});
        }}>
        <Text style={{color: 'white', fontSize: 20}}>Go To Details</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{padding: 20, backgroundColor: 'green'}}
        onPress={() => {
          navigation.push('Home');
        }}>
        <Text style={{color: 'white', fontSize: 20}}>Go To Home Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{padding: 20, backgroundColor: 'green'}}
        onPress={() => {
          navigation.popToTop();
        }}>
        <Text style={{color: 'white', fontSize: 20}}>Go To First Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{padding: 20, backgroundColor: 'green'}}
        onPress={() => {
          navigation.goBack(() => {
            console.log('going back');
          });
        }}>
        <Text style={{color: 'white', fontSize: 20}}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

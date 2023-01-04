import React from 'react';

import {View, Text, Pressable, TouchableOpacity} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default HomeScreen = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.backgroundColor,
      }}>
      <TouchableOpacity
        style={{padding: 20, backgroundColor: 'green'}}
        onPress={() => {
          navigation.navigate('JobsScreen', {
            name: 'Ali',
            id: 1,
          });
        }}>
        <Text style={{color: 'white', fontSize: 20}}>Go To Details</Text>
      </TouchableOpacity>
    </View>
  );
};

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Drivers from './Drivers';
import Constructors from '../Pieces/Constructors';

const Tab = createMaterialTopTabNavigator();

const StandingsScreen = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        tabStyle: {width: 80, height: 40},
        style: {backgroundColor: '#000'},
        labelStyle: {
          color: '#fff',

          alignSelf: 'center',
          justifyContent: 'center',
        },
        indicatorStyle: {backgroundColor: '#E50914'},
      }}>
      <Tab.Screen
        name="Drivers"
        component={Drivers}
        options={{tabBarLabel: '❤️'}}
      />
      <Tab.Screen
        name="Constructors"
        component={Constructors}
        options={{tabBarLabel: '🔥'}}
      />
    </Tab.Navigator>
  );
};

export default StandingsScreen;

const styles = StyleSheet.create({});

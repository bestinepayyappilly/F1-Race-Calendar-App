import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Reanimated 2']);

import SplashScreen from './Components/SplashScreen';
import Drivers from './Components/NavBarScreens/Drivers';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Feed from './Components/NavBarScreens/Feed';
import StandingsScreen from './Components/NavBarScreens/StandingsScreen';
import InfoScreen from './Components/InfoScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const Home = () => {
    return (
      <Tab.Navigator
        initialRouteName="Drivers"
        tabBarOptions={{
          inactiveTintColor: '#fff',
          activeTintColor: '#E50914',
          activeBackgroundColor: '#000',
          inactiveBackgroundColor: '#000',
          style: {borderTopWidth: 0, elevation: 0},
          showLabel: false,
        }}>
        <Tab.Screen
          name="Home"
          component={Feed}
          options={{
            tabBarIcon: ({color}) => (
              <Ionicons name="home" color={color} size={25} />
            ),
          }}
        />
        <Tab.Screen
          name="Standings"
          component={StandingsScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Ionicons name="md-barcode" color={color} size={30} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <View style={{height: '100%', width: '100%', backgroundColor: '#000'}}>
      <StatusBar backgroundColor="#000" />
      <NavigationContainer>
        <Stack.Navigator mode="modal">
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="InfoScreen"
            component={InfoScreen}
            options={{
              headerStyle: {backgroundColor: '#000'},
              headerTitleStyle: {color: '#fff'},
              headerTintColor: '#fff',
              headerTitle: 'Information',
              headerTitleAlign: 'center',
              
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});

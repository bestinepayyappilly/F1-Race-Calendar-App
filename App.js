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

import Feed from './Components/NavBarScreens/Feed';
import StandingsScreen from './Components/NavBarScreens/StandingsScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const Home = () => {
    return (
      <Tab.Navigator
        initialRouteName="Drivers"
        tabBarOptions={{
          showLabel: false,
          inactiveTintColor: '#fff',
          activeTintColor: '#E50914',
          activeBackgroundColor: '#000',
          inactiveBackgroundColor: '#000',
          style: {borderTopWidth: 0, elevation: 0},
        }}>
        <Tab.Screen
          name="Home"
          component={Feed}
          options={{
            tabBarLabel: 'Home',

            tabBarIcon: ({color}) => (
              <Ionicons name="ios-home" color={color} size={30} />
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
    <View style={{height: '100%', width: '100%'}}>
      <StatusBar backgroundColor="#000" />
      <NavigationContainer>
        <Stack.Navigator>
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
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});

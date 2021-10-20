import * as React from 'react';
import {Text, View, StyleSheet, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//components

import Home from './components/Home'
import Menu from './components/Menu';
import Task from './components/Tasks';
import Jobs from './components/Jobs';
import Wallet from './components/Wallet';



const Tab = createMaterialBottomTabNavigator();

function MyTabs () {
  return (
    <Tab.Navigator
      initialRouteName="Wallet"
      activeColor="#498275"
      labelStyle={{fontSize: 12}}
      barStyle={{backgroundColor: '#141615'}}
      style={{backgroundColor: '#141615'}}>
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarLabel: 'Wallet',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="wallet" color={'#22534b'} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Task"
        component={Task}
        options={{
          tabBarLabel: 'Tasks',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="calendar-star"
              color={'#22534b'}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="account"
              color={'#22534b'}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Jobs"
        component={Jobs}
        options={{
          tabBarLabel: 'Jobs',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={'#22534b'} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          tabBarLabel: 'Menu',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="menu" color={'#22534b'} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs style={styles.container} />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#121212',
    color: '#121212',
  },
});
import * as React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Appbar} from 'react-native-paper';
import {Provider as PaperProvider} from 'react-native-paper';

//importing subcomponents

import Active from './subComponents/Actives';
import Upcoming from './subComponents/Upcomings';
import Completed from './subComponents/Complete';

const Tab = createMaterialTopTabNavigator();

const Task = () => {
  const _goBack = () => console.log('Went back');
  const _handleMore = () => console.log('Shown more');

  return (
    <View style={{flex: 1}}>
      <View>
        <Appbar.Header style={{backgroundColor: '#011a16'}}>
          <Appbar.BackAction onPress={_goBack} />
          <Appbar.Content title="My Task" />
          <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
        </Appbar.Header>
      </View>
      <View style={styles.tabs}>
        <Tab.Navigator
          style={styles.tabs}
          screenOptions={{
            tabBarInactiveTintColor: '#fff',
            tabBarActiveTintColor: '#2f4f44',
            tabBarPressColor: '#fff',
            tabBarLabelStyle: {fontSize: 12},
            tabBarItemStyle: {width: 100},
            tabBarStyle: {backgroundColor: '#121212'},
          }}>
          <Tab.Screen name="Active" component={Active} />
          <Tab.Screen name="Upcoming" component={Upcoming} />
          <Tab.Screen name="Completed" component={Completed} />
        </Tab.Navigator>
      </View>
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#121212',
    color: '#121212',
  },
  tabs: {
    flex: 1,
    backgroundColor: '#121212',
    color: '#121212',
  },
});

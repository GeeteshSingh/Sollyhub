import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons';

const Upcoming = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: '#fff'}}>Upcoming!</Text>
    </View>
  );
};

export default Upcoming;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#121212',
    color: '#121212',
  },
});
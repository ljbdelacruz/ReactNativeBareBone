import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import LoginScreen from './Pages/Login/Login.page';
import DashboardScreen from './Pages/Dashboard/Dashboard'

const MainNavigator = createStackNavigator({
  Login: {screen: LoginScreen},
  Dashboard: {screen: DashboardScreen},
});

const App = createAppContainer(MainNavigator);
export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput:{
    width:300,
    height:40
  }
});

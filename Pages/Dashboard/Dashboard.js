import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class DashboardScreen extends React.Component {
  static navigationOptions = {
    title: 'Dashboard',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Text>Dashboard Page</Text>
    );
  }
}

export default DashboardScreen;

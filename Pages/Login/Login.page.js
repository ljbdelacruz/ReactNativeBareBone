import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Text>Login Page</Text>
    );
  }
}
export default LoginScreen;

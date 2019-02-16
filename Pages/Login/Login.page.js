import React, { Component } from 'react';
import { AppRegistry, Image } from 'react-native';

export default class LoginPage extends Component {
  render() {
    return (
      <View style={[styles.container, {backgroundColor: 'green'}]}>
        <Text>Login Page</Text>
      </View>
    )
  },
}

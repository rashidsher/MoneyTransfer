import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View>
        <Text>Enter the name</Text>
        <Button title="Login" />
      </View>
    );
  }
}

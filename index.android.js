
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';

import {Text} from '@shoutem/ui';
import { StackNavigator } from 'react-navigation';

export default class StarGaze extends Component {
  render() {
    return (
      <Text> Hey </Text>
    );
  }
}

const App = StackNavigator({
  HomeScreen: {screen: StarGaze},
});

AppRegistry.registerComponent('StarGaze', () => App);

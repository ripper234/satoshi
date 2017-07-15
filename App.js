import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Dimensions } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Constants } from 'expo';
import HomeScreen from './Home.js';
import ProfileScreen from './Profile.js';

const MainNavigator = StackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MainNavigator style={{ width: Dimensions.get('window').width }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    paddingTop: Constants.statusBarHeight,
  },
}); 
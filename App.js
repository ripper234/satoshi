import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Dimensions } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Constants } from 'expo';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: null };
  }

  render() {
    return (
      <View>
        <Text>Welcome to Satoshi</Text>
        <TextInput
          style={{ height: 50, width: 140, padding: 15, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(text) => this.setState({ text })}
          placeholder='nickname'
          value={this.state.text}
        />
        <Button title="login"
          onPress={() => this.props.navigation.navigate('Profile', { nickname: 'Lucy' })} />
      </View>
    );
  }
}

class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>Welcome {this.props.nickname}</Text>
      </View>
    );
  }
}

class Friend extends React.Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

class FriendList extends React.Component {
  render() {
    return (
      <View>
        <Friend name='Sharon' />
        <Friend name='Ron' />
      </View>
    );
  }
}

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
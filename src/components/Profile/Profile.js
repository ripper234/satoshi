import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

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

export default class ProfileScreen extends React.Component {
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
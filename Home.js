import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Login from './components/Login/Login.js';

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: null };
    }

    onLogin = (nickname) => {
        const password = 'TODO Password'
        console.log(`Login: (${nickname}, ${password})`) // user credentials
        this.props.navigation.navigate('Profile', { nickname: nickname })
    }

    render() {
        return (
            <View>
                <Text>Welcome to Satoshi</Text>
                <Login onLogin={this.onLogin} />
            </View>
        );
    }
}
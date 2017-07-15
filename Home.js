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
        switch (nickname) {
            case 'ron':
            case 'sharon':
                this.props.navigation.navigate('Profile', { nickname: nickname })
                return;
        }

        console.log('Username does not exist');
        // TODO Display Error
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
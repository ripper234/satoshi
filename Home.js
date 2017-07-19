import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Login from './components/Login/Login.js';

// TODO Use prod server in prod mode 
// const server = 'https://satoshi-api.herokuapp.com'
const server = 'http://localhost:8080'

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: null };
    }

    onLogin = async (nickname) => {
        const deviceId = 'TODO DeviceID'
        console.log(`Login: (${nickname}, ${deviceId})`) // user credentials
        let response = await fetch(`${server}/api/login`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nickname: nickname,
                deviceId: deviceId,
            })
        })

        switch (response.json().status) {
            case 'STATUS_OK':
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
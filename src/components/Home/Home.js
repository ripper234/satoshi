import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Login from '../Login/Login.js';
import {localAddress} from '../../config.js'
console.log('localAddress: ', localAddress);

// TODO Use prod server in prod mode
// const server = 'https://satoshi-api.herokuapp.com'
const server = `http://${localAddress}:8080`

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: null };
    }

    onLogin = async (nickname) => {
        const deviceId = 'TODO DeviceID'
        // console.log(`Login: (${nickname}, ${deviceId})`) // user credentials
        const request = await fetch(`${server}/api/login`, {
            method: 'POST',
            body: JSON.stringify({
                nickname: nickname,
                deviceId: deviceId,
            })
        })

        const response = await request.json()
        switch (response.status) {
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
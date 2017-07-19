import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { nickname: null };
    }

    render() {
        return (

            <View>
                <TextInput
                    style={{ height: 50, width: 140, padding: 15, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(nickname) => this.setState({ nickname })}
                    placeholder='nickname'
                    value={this.state.nickname}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <Button title="login"
                    onPress={() => this.props.onLogin(this.state.nickname)} />
            </View>
        );
    }
}
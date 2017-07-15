import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class HomeScreen extends React.Component {
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
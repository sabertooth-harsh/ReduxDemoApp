import React, { Component } from 'react';
import { View, Text, DevSettings } from 'react-native';
import { Card, Button, Input, Icon } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';

class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            pwd: ''
        }

    }

    async handleSubmit() {
        const userInfo = {
            email: this.state.email,
            pwd: this.state.pwd
        }
        try {
            await AsyncStorage.setItem('user', JSON.stringify(userInfo))
                .then(() => {
                    DevSettings.reload();
                })
        } catch (err) {
            console.log(err);
        }

    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Card containerStyle={{ width: 350 }}>
                    <Card.Title style={{ fontSize: 30 }}>Sign Up</Card.Title>
                    <Card.Divider />
                    <Input
                        placeholder='Email'
                        value={this.state.email}
                        onChangeText={(value) => this.setState({ email: value })}
                    />
                    <Input
                        placeholder='Password'
                        value={this.state.pwd}
                        onChangeText={(value) => this.setState({ pwd: value })}
                    />
                    <Button
                        title='Submit'
                        onPress={() => this.handleSubmit()}
                    />
                </Card>
            </View>
        );
    }
}

export default SignUp;
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-elements';


class Home extends Component {
    constructor(props) {
        super(props);


        this.state = {
            email: '',
            pwd: ''
        }
    }

    async componentDidMount() {
        try {
            const user = await AsyncStorage.getItem('user')
                .then((user) => {
                    if (user != null) {
                        user = JSON.parse(user);
                        this.setState({ email: user.email, pwd: user.pwd });
                    }
                })
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Card containerStyle={{ width: 400 }}>
                    <Card.Title style={{ fontSize: 25 }}>Logged In User Details</Card.Title>
                    <Card.Divider />
                    <Text style={{ fontSize: 15 }}>Email: {this.state.email}</Text>
                    <Text style={{ fontSize: 15 }}>Password: {this.state.pwd}</Text>
                </Card>
            </View>
        );
    }
}

export default Home;
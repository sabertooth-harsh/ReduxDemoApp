import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Input, Button, Card, Icon } from 'react-native-elements';
import * as actionTypes from '../redux/actionTypes';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';
import { addUserInfo } from '../redux/actionCreators';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SignUp from '../screen/signup';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text>HomeScreen</Text>
        </View>
    );
}

const SignUpScreen = ({ navigation }) => {
    return (
        <SignUp />
    );
}

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            pwd: '',
            isSignedIn: false
        }
    }

    async componentDidMount() {
        try {
            const user = await AsyncStorage.getItem('user')
                .then((user) => {
                    if (user != null) {
                        this.setState({ isSignedIn: true });
                    }
                    console.log(JSON.parse(user));
                });
        } catch (err) {
            console.log(err);
        }
    }


    render() {
        return (
            <Stack.Navigator>
                {this.state.isSignedIn ? (
                    <>
                        <Stack.Screen name='Home' component={HomeScreen} />
                    </>
                ) : (
                        <>
                            <Stack.Screen name='SignUp' component={SignUpScreen} />
                        </>
                    )}
            </Stack.Navigator>
        );
    }
}

export default Main;
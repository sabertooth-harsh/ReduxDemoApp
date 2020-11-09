import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Main from './components/main';
import { ConfigureStore } from './redux/configureStore';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import store from './redux/configureStore';

export default class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <NavigationContainer>
        <Provider store={store}>
          <Main />
        </Provider>
      </NavigationContainer>
    );
  }
}
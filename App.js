import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Main from './components/main';
import { ConfigureStore } from './redux/configureStore';
import { Provider } from 'react-redux';
import store from './redux/configureStore';

export default class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}
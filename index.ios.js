/* eslint no-console: 0 */
import React, { Component, PropTypes } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import Router from './Router';
import configureStore from '../store/configureStore';

const store = configureStore();

console.disableYellowBox = true;

class Root extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router store={store} />
      </Provider>
    );
  }
}


AppRegistry.registerComponent('kickOff', () => Root);

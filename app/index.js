import React, { Component } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';
import { Provider } from 'react-redux';

import Navigator from './config/routes';
import store from './config/store';


EStyleSheet.build({
  $white: '#FFFFFF',
  $primaryOrange: '#FFBFA8',
  $primaryBlue: '#23B5D3',
  $lightBlue: 'rgb(158, 223, 240)',
  $screenWidth: Dimensions.get('window').width,
  $screenHeight: Dimensions.get('window').height,
  // $outline: 1,
});


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>

    );
  }
}

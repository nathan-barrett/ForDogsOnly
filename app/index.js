import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';
import Navigator from './config/routes';


EStyleSheet.build({
  $white: '#FFFFFF',
  $primaryOrange: '#FFBFA8',
  $primaryBlue: '#23B5D3',
  $screenWidth: Dimensions.get('window').width,
  $screenHeight: Dimensions.get('window').height,
});

export default () => <Navigator />;

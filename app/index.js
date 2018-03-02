import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Welcome from './screens/Welcome';


EStyleSheet.build({
  $white: '#FFFFFF',
  $primaryOrange: '#FFBFA8',
  $primaryBlue: '#23B5D3',
});

export default () => <Welcome />;

import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Navigator from './config/routes';
import Profile from './screens/Profile';


EStyleSheet.build({
  $white: '#FFFFFF',
  $primaryOrange: '#FFBFA8',
  $primaryBlue: '#23B5D3',
});

export default () => <Profile />;

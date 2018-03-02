import React from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';

import styles from './styles';

const Logo = () => (
  <View style={styles.container}>
    <Image resizeMode="contain" style={styles.logo} source={require('./images/logo.png')} />
  </View>
);

export default Logo;

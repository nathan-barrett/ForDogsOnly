import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, View, Text } from 'react-native';

import styles from './styles';

const LoginButton = props => (
  <View style={styles.container}>
    <TouchableHighlight
      style={styles.loginButton}
      onPress={props.onPress}
    >
      <Text style={styles.loginText}>{props.buttonText}</Text>
    </TouchableHighlight>
  </View>
);

LoginButton.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
};

export default LoginButton;

import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, Text } from 'react-native';

import styles from './styles';

const LoginButton = props => (
  <TouchableHighlight
    style={styles.LoginButton}
    onPress={props.onPress}
  >
    <Text style={styles.loginText}>{props.buttonText}</Text>
  </TouchableHighlight>
);

LoginButton.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
};

export default LoginButton;

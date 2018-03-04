import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, Text } from 'react-native';

import styles from './styles';


const SubmitButton = props => (
  <TouchableHighlight
    style={styles.submitButton}
    onPress={props.onPress}
  >
    <Text style={styles.loginText}>{props.buttonText}</Text>
  </TouchableHighlight>
);

SubmitButton.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
};

export default SubmitButton;

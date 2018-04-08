import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const CreateProfileButton = props => (
  <TouchableOpacity
    onPress={props.onPress}
    style={styles.profile}
  >
    <Text style={styles.profileText}>Create an Account</Text>
  </TouchableOpacity>
);

CreateProfileButton.propTypes = {
  onPress: PropTypes.func,
};

export default CreateProfileButton;

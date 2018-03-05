import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import styles from './styles';

const FormContainer = ({ children }) => (
  <View
    style={styles.startContainer}
  >
    {children}
  </View>
);

FormContainer.propTypes = {
  children: PropTypes.any,
};

export default FormContainer;

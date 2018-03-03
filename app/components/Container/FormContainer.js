import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import styles from './styles';

const Container = ({ children }) => (
  <View
    style={styles.formContainer}
  >
    {children}
  </View>
);

Container.propTypes = {
  children: PropTypes.any,
};

export default Container;

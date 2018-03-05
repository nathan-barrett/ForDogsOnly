import PropTypes from 'prop-types';
import React from 'react';
import { ScrollView } from 'react-native';

import styles from './styles';

const ScrollContainer = ({ children }) => (
  <ScrollView
    contentContainerStyle={styles.startContainer}
  >
    {children}
  </ScrollView>
);

ScrollContainer.propTypes = {
  children: PropTypes.any,
};

export default ScrollContainer;

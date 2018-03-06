import PropTypes from 'prop-types';
import React from 'react';
import { ScrollView, View } from 'react-native';

import styles from './styles';

const ScrollContainer = ({ children }) => (
  <View style={styles.parentContainer}>
    <ScrollView styles={styles.ScrollContainer}>
      {children}
    </ScrollView>
  </View>
);

ScrollContainer.propTypes = {
  children: PropTypes.any,
};

export default ScrollContainer;

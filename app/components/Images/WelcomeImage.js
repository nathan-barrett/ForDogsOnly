import React from 'react';
import { ImageBackground } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';


const WelcomeImage = ({ children }) => (
  <ImageBackground
    style={styles.welcomeContainer}
    source={require('./assets/dog1.jpg')}
  >
    {children}
  </ImageBackground>
);

WelcomeImage.propTypes = {
  children: PropTypes.any,
};

export default WelcomeImage;

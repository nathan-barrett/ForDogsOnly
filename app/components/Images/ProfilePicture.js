import React from 'react';
import { Image } from 'react-native';


import styles from './styles';

const ProfilePicture = () => (
  <Image
    source={require('./assets/dog1.jpg')}
    resizeMode="contain"
    style={styles.profilePhoto}
  />
);


export default ProfilePicture;

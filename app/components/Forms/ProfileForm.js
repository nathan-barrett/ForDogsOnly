import React from 'react';
import { View, TextInput } from 'react-native';

import styles from './styles';


const ProfileForm = () => (
  <View style={styles.formBorder} >
    <TextInput
      style={styles.input}
      placeholder="Dog's Name:"
    />
    <TextInput
      style={styles.input}
      placeholder="Description"
    />
    <TextInput
      style={styles.input}
      placeholder="Select Profile Photo"
    />
  </View>
);
export default ProfileForm;

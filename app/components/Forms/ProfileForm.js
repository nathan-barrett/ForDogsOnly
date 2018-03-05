import React from 'react';
import { View, TextInput } from 'react-native';

import styles from './styles';


const ProfileForm = () => (
  <View style={styles.formBorder} >
    <TextInput
      placeholder="Dog's Name:"
    />
    <TextInput
      placeholder="Description"
    />
    <TextInput
      placeholder="Select Profile Photo"
    />
  </View>
);
export default ProfileForm;

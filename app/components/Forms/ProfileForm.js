import React from 'react';
import { View, TextInput } from 'react-native';

import styles from './styles';


const RegistrationForm = () => (
  <View style={styles.formBorder} >
    <TextInput
      style={styles.input}
      placeholder="Full Name"
    />
    <TextInput
      style={styles.input}
      placeholder="Email"
    />
    <TextInput
      style={styles.input}
      placeholder="Email"
    />
  </View>
);
export default RegistrationForm;

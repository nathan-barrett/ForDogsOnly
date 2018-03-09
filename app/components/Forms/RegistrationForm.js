import React from 'react';
import { View, TextInput } from 'react-native';

import styles from './styles';


const RegistrationForm = () => (
  <View style={styles.formBorder} >
    <TextInput
      style={styles.input}
      placeholder="Full Name"
      selectionColor="orange"
    />
    <TextInput
      style={styles.input}
      placeholder="Email"
    />
    <TextInput
      style={styles.input}
      placeholder="Password"
    />
    <TextInput
      style={styles.input}
      placeholder="Confirm Password"
    />
  </View>
);
export default RegistrationForm;

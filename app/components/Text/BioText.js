import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

const BioText = () => (
  <View style={styles.container}>
    <Text style={styles.bioName}>Mobley</Text>
    <Text style={styles.bioBreed}>Chuihuahua/Corgi Mix</Text>
    <Text style={styles.bioDesc}>
      Hi! My name is mobley and I am a very energetic doggie from Denver, Colorado. I love to go on walks and hang out with other doggies.
    </Text>
  </View>
);

export default BioText;

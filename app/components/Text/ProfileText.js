import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const ProfileText = () => (
  <View style={{ flexDirection: 'row' }}>
    <Text style={styles.name}>Mobley</Text>
    <Icon style={styles.gender} name="md-male" size={25} />
  </View>
);

const ProfileDetails = () => (
  <View>
    <View>
      <Text />
    </View>
  </View>
);
export default ProfileText;

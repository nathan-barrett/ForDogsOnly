import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// import PropTypes from 'prop-types';

import styles from './styles';

const ProfileText = () => (
  <View style={{ flexDirection: 'row' }}>
    <Text style={styles.name}>Mobley</Text>
    <Icon style={styles.gender} name="md-male" size={25} />
  </View>
);

const ProfileDetails = () => (
  <View style={styles.detailContainer}>
    <View style={styles.breedRow}>
      <Text style={styles.detailHeader}>Breed</Text>
      <Text style={styles.detailText}>Chihuahua Mix</Text>
    </View>
    <View style={styles.sizeRow}>
      <Text style={styles.detailHeader}>Size</Text>
      <Text style={styles.detailText}>Small</Text>
    </View>
    <View style={styles.ageRow}>
      <Text style={styles.detailHeader}>Age</Text>
      <Text style={styles.detailText}>2 Years</Text>
    </View>
  </View>
);

const ProfileDescription = () => (
  <View style={styles.descriptionContainer}>
    <Text style={styles.descriptionText}>
      Tala is a puppy at heart, and love sto roll around in the dirt. She is still figuring out how big her body is. Tala is a puppy at heart, and love sto roll around in the dirt. She is still figuring out how big her body is.
    </Text>
  </View>
);


export { ProfileText, ProfileDetails, ProfileDescription };

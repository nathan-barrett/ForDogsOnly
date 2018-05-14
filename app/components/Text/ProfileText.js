import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

import styles from './styles';


const ProfileText = (props) => {
  const genderIcon = () => {
    if (props.gender === 'male') {
      return 'md-male';
    }
    return 'md-female';
  };
  return (
    <View style={{ flexDirection: 'row' }}>
      <Text style={styles.name}>{props.name}</Text>
      <Icon style={styles.gender} name={genderIcon()} size={25} />
    </View>);
};


ProfileText.propTypes = {
  name: PropTypes.string,
  gender: PropTypes.string,
};

const ProfileDetails = props => (
  <View style={styles.detailContainer}>
    <View style={styles.breedRow}>
      <Text style={styles.detailHeader}>Breed</Text>
      <Text style={styles.detailText}>{props.breed}</Text>
    </View>
    <View style={styles.sizeRow}>
      <Text style={styles.detailHeader}>Size</Text>
      <Text style={styles.detailText}>{props.size}</Text>
    </View>
    <View style={styles.ageRow}>
      <Text style={styles.detailHeader}>Age</Text>
      <Text style={styles.detailText}>{props.age}</Text>
    </View>
  </View>
);
ProfileDetails.propTypes = {
  breed: PropTypes.string,
  size: PropTypes.string,
  age: PropTypes.string,
};

const ProfileDescription = props => (
  <View style={styles.descriptionContainer}>
    <Text style={styles.descriptionText}>
      {props.description}
    </Text>
  </View>
);

ProfileDescription.propTypes = {
  description: PropTypes.string,
};


export { ProfileText, ProfileDetails, ProfileDescription };

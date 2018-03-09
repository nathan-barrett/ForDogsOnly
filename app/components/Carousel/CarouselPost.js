import React, { Component } from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

import styles from './styles';


export default class CarouselPost extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
  };


  render() {
    const { data: { profilePhoto, name, breed } } = this.props;
    const nameTitle = (
      <Text style={styles.title}>
        { name.toUpperCase() }
      </Text>
    );

    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.slideInnerContainer}
      >
        <View style={styles.shadow} />
        <View style={styles.imageContainer}>
          <Image
            source={profilePhoto}
            style={styles.image}
          />
          <View style={styles.radiusMask} />
        </View>
        <View style={styles.textContainer}>
          {nameTitle}
          <Text style={styles.subtitle}>
            {breed}
          </Text>
          <TouchableOpacity
            onPress={() => { alert(`You've clicked '${name}'`); }}
            style={styles.icon}
          >
            <Icon name="chevron-right" size={30} color="grey" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  }
}

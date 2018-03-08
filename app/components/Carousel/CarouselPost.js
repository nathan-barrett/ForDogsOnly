import React, { Component } from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
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
        onPress={() => { alert(`You've clicked '${name}'`); }}
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
        </View>
      </TouchableOpacity>
    );
  }
}

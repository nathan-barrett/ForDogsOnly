import React, { Component } from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

import styles from './styles';


export default class CarouselPost extends Component {
  handleProfilePress() {
    this.props.onPress(this.props.data.key);
  }


  render() {
    const nameTitle = (
      <Text style={styles.title}>
        { this.props.data.name.toUpperCase() }
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
            source={this.props.data.profilePhoto}
            style={styles.image}
          />
          <View style={styles.radiusMask} />
        </View>
        <View style={styles.textContainer}>
          {nameTitle}
          <Text style={styles.subtitle}>
            {this.props.data.breed}
          </Text>
          <TouchableOpacity
            onPress={this.handleProfilePress.bind(this)}
            style={styles.icon}
          >
            <Icon name="chevron-right" size={30} color="grey" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  }
}

CarouselPost.propTypes = {
  data: PropTypes.object.isRequired,
  onPress: PropTypes.func,
};

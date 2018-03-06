import React, { Component } from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

export default class CarouselPost extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
  };
  render() {
    const { data: { profilePhoto } } = this.props;
    return (
      <Image
        source={profilePhoto}
        resizeMode="cover"
        style={styles.post}
      />

    );
  }
}

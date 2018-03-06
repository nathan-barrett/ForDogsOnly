import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const CarouselPost = props => (
  <Image
    source={props.source}
    resizeMode="cover"
    style={styles.post}
  />
);

CarouselPost.propTypes = {
  source: PropTypes.any,
};
export default CarouselPost;

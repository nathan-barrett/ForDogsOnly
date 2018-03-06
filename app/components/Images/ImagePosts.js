import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const ImagePosts = props => (
  <Image
    source={props.source}
    resizeMode="center"
    style={styles.imagePost}
  />
);
ImagePosts.propTypes = {
  source: PropTypes.number,
};
export default ImagePosts;

import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import PropTypes from 'prop-types';


// import { Images } from '../../data/images';


import styles from './styles';

export default class ProfilePicture extends Component {
  render() {
    const data = this.props.photos;
    console.log(data);
    return (
      <Swiper
        style={styles.wrapper}
        showsButtons
        showsPagination={false}
      >
        {data.map((item, key) => (
          <View key={key} style={styles.slide}>
            <Image
              style={styles.image}
              source={item.image}
              resizeMode="contain"
            />
          </View>
            ))}
      </Swiper>
    );
  }
}

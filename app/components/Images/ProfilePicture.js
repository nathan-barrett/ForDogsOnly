import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Swiper from 'react-native-swiper';


import { Images } from '../../data/images';


import styles from './styles';

export default class ProfilePicture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
    this.setImages = this.setImages.bind(this);
  }

  componentDidMount() {
    this.setImages();
  }
  setImages() {
    this.setState({
      items: [
        { image: Images.Mobley1 },
        { image: Images.Mobley2 },
        { image: Images.Mobley3 },
        { image: Images.Mobley4 },
        { image: Images.Mobley5 },
      ],
    });
  }
  render() {
    return (
      <Swiper
        style={styles.wrapper}
        showsButtons
        showsPagination={false}
      >
        {this.state.items.map((item, key) => (
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

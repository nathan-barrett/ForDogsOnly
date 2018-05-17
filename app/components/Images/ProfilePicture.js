import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';


// import { Images } from '../../data/images';


import styles from './styles';

export default class ProfilePicture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
    this.renderImages = this.renderImages.bind(this);
  }
  componentDidMount() {
    this.renderImages();
  }
  renderImages = () => {
    const data = this.props.photos;
    const items = [];
    Object.keys(data).forEach((key) => {
      const image = Object.assign({}, { image: data[key] });
      items.push(image);
    });
    this.setState({ items });
  }


  render() {
    return (
      <Swiper
        style={styles.wrapper}
        showsButtons
        showsPagination
        loadMinimal
      >
        {this.state.items.map((image, key) => (
          <View key={key} style={styles.slide}>
            <TouchableOpacity
              onPress={this.props.onPress}
              style={styles.icon}
            >
              <Icon style={{ fontWeight: '600' }}name="long-arrow-left" size={20} color="white" />
            </TouchableOpacity>
            <Image
              style={styles.image}
              source={{ uri: image.image }}
              resizeMode="contain"
            />
          </View>
          ))
          }
      </Swiper>
    );
  }
}
ProfilePicture.propTypes = {
  photos: PropTypes.object,
};

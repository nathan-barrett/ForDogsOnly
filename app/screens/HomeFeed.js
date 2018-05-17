import React, { Component } from 'react';
import { StatusBar, View, Platform, SafeAreaView, TouchableOpacity } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel'; // 3.6.0
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Feather';


import { CarouselPost } from '../components/Carousel';
import { sliderWidth, itemWidth } from '../components/Carousel/styles';
import styles from './styles/HomeFeedStyles';


const IS_ANDROID = Platform.OS === 'android';

export default class HomeFeed extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  }
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      headerRight: (
        <TouchableOpacity
          onPress={params.userProfile}
          style={{ marginRight: 10 }}
        >
          <Icon
            name="user"
            color="white"
            size={25}
          />
        </TouchableOpacity>
      ),
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      slider1ActiveSlide: 0,
    };
  }
  componentWillMount() {
    this.props.navigation.setParams({ userProfile: this.navUserProfile });
  }
  navUserProfile = () => {
    this.props.userProfile();
    this.props.navigation.navigate('Profile');
  }
  navigateToProfile = (id) => {
    this.props.changeSelectedId(id);
    this.props.navigation.navigate('Profile');
  }

  renderItem({ item }) {
    return (
      <CarouselPost
        data={item}
        onPress={this.navigateToProfile}
      />);
  }


  render() {
    const { slider1ActiveSlide } = this.state;
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>

          <View style={styles.exampleContainer}>
            <StatusBar backgroundColor="blue" barStyle="light-content" />
            <Carousel
              ref={ref => this.carouselRef}
              data={Object.values(this.props.dogData)}
              renderItem={item => this.renderItem(item)}
              onSnapToItem={index => this.setState({ slider1ActiveSlide: index })}
              inactiveSlideScale={0.94}
              inactiveSlideOpacity={0.7}
              inactiveSlideShift={20}
              containerCustomStyle={styles.slider}
              contentContainerCustomStyle={styles.sliderContentContainer}
              loop
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
            />
            <Pagination
              dotsLength={Object.keys(this.props.dogData).length}
              activeDotIndex={slider1ActiveSlide}
              containerStyle={styles.paginationContainer}
              dotColor="rgba(255, 255, 255, 0.92)"
              dotStyle={styles.paginationDot}
              inactiveDotColor="black"
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
              carouselRef={this.carouselRef}
              tappableDots={this.carouselRef}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

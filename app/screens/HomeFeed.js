import React, { Component } from 'react';
import { StatusBar, View, Platform, SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Carousel, { Pagination } from 'react-native-snap-carousel'; // 3.6.0
import { CarouselPost } from '../components/Carousel';
import USER_ENTRIES from '../data/data';

import { sliderWidth, itemWidth } from '../components/Carousel/styles';
import styles, { colors } from './styles/HomeFeedStyles';


const IS_ANDROID = Platform.OS === 'android';
const SLIDER_1_FIRST_ITEM = 0;

export default class HomeFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
    };
  }


  renderItem({ item }) {
    return <CarouselPost data={item} />;
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
              data={Object.values(USER_ENTRIES)}
              renderItem={this.renderItem}
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
              dotsLength={Object.keys(USER_ENTRIES).length}
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

import React, { Component } from 'react';
import { StatusBar, View, Platform, SafeAreaView, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Carousel, { Pagination } from 'react-native-snap-carousel'; // 3.6.0
import { CarouselPost } from '../components/Carousel';
import USER_ENTRIES from '../data/data';

import { sliderWidth, itemWidth } from '../components/Carousel/styles';
import styles, { colors } from './styles/HomeFeedStyles';


const IS_ANDROID = Platform.OS === 'android';
const SLIDER_1_FIRST_ITEM = 1;

export default class HomeFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
    };
  }

  get gradient() {
    return (
      <LinearGradient
        colors={[colors.background1, colors.background2]}
        startPoint={{ x: 1, y: 0 }}
        endPoint={{ x: 0, y: 1 }}
        style={styles.gradient}
      />
    );
  }

  renderItem({ item }) {
    return <CarouselPost data={item} />;
  }

  // get pagination() {
  //   const { activeScreen } = this.state;
  //   return (
  //     <Pagination
  //       dotsLength={Object.keys(USER_ENTRIES).length}
  //       activeDotIndex={activeScreen}
  //       containerStyle={styles.container}
  //       dotStyle={{
  //                width: 5,
  //                height: 5,
  //                borderRadius: 5,
  //                marginHorizontal: 5,
  //                backgroundColor: 'black',
  //            }}
  //       inactiveDotStyle={{
  //                // Define styles for inactive dots here
  //            }}
  //       inactiveDotOpacity={0.4}
  //       inactiveDotScale={0.6}
  //     />
  //   );
  // }


  render() {
    const { slider1ActiveSlide } = this.state;
    console.table(Object.values(USER_ENTRIES));
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <StatusBar
            translucent
            backgroundColor="rgba(0, 0, 0, 0.3)"
            barStyle="light-content"
          />
          { this.gradient }
          <ScrollView
            style={styles.scrollview}
            scrollEventThrottle={200}
            directionalLockEnabled
          >
            <View style={styles.exampleContainer}>
              <StatusBar backgroundColor="blue" barStyle="light-content" />
              <Carousel
                ref={ref => this.carouselRef}
                data={Object.values(USER_ENTRIES)}
                renderItem={this.renderItem}
                firstItem={SLIDER_1_FIRST_ITEM}
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
                tappableDots={!!this.carouselRef}
              />
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

import React, { Component } from 'react';
import { StatusBar, View, Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel'; // 3.6.0
import { CarouselPost } from '../components/Carousel';
import { Container } from '../components/Container';


const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;


export default class HomeFeed extends Component {
  SCREENS = [
    <CarouselPost source={require('../components/Carousel/images/dog1.jpg')} />,
    <CarouselPost source={require('../components/Carousel/images/dog5.jpg')} />,
    <CarouselPost source={require('../components/Carousel/images/dog8.jpg')} />,
  ]

  render() {
    return (
      <Container>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Carousel
          ref={ref => this.carouselRef}
          data={this.SCREENS}
          renderItem={({ item }) => item}
          sliderWidth={SCREEN_WIDTH}
          itemWidth={SCREEN_WIDTH}
          itemHeight={SCREEN_HEIGHT}
          sliderHeight={SCREEN_HEIGHT}
          inactiveSlideOpacity={1}
          inactiveSlideScale={1}
        />
        <Pagination
          renderDots={activeIndex => (
          this.SCREENS.map((screen, i) => (
            <View
              style={{ flex: 1, alignItems: 'center' }}
              key={i}
            />
          ))
        )}
          activeDotIndex={this.state.activeTab}
          dotsLength={3}
          tappableDots={!!this.carouselRef}
          carouselRef={this.carouselRef}
        />
      </Container>


    );
  }
}

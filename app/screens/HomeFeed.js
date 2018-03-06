import React, { Component } from 'react';
import { StatusBar, Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel'; // 3.6.0
import { CarouselPost } from '../components/Carousel';
import { Container } from '../components/Container';
import USER_ENTRIES from '../data/data';

import styles from './styles/HomeFeedStyles';


const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;


export default class HomeFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeScreen: 0,
    };
  }
  get pagination() {
    const { activeScreen } = this.state;
    return (
      <Pagination
        dotsLength={Object.keys(USER_ENTRIES).length}
        activeDotIndex={activeScreen}
        containerStyle={styles.container}
        dotStyle={{
                 width: 5,
                 height: 5,
                 borderRadius: 5,
                 marginHorizontal: 5,
                 backgroundColor: 'black',
             }}
        inactiveDotStyle={{
                 // Define styles for inactive dots here
             }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  }

  renderItem({ item }) {
    return <CarouselPost data={item} />;
  }

  render() {
    console.table(Object.values(USER_ENTRIES));
    return (
      <Container>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Carousel
          ref={ref => this.carouselRef}
          onSnapToItem={index => this.setState({ activeScreen: index })}
          loop
          data={Object.values(USER_ENTRIES)}
          renderItem={this.renderItem}
          sliderWidth={SCREEN_WIDTH}
          itemWidth={SCREEN_WIDTH}
          itemHeight={SCREEN_HEIGHT}
          sliderHeight={SCREEN_HEIGHT}
          inactiveSlideOpacity={0.8}
        />
        {this.pagination}

      </Container>


    );
  }
}

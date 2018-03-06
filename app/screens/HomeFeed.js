import React, { Component } from 'react';
import { Platform, View, ScrollView, Text, StatusBar, SafeAreaView } from 'react-native';


import { Pagination } from '../components/Pagination';
import { Container } from '../components/Container';


const HomeFeed = () => (
  <Container>
    <StatusBar backgroundColor="blue" barStyle="light-content" />
    <Pagination />
  </Container>
);

export default HomeFeed;

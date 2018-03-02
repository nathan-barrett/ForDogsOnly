import React from 'react';
import { StatusBar } from 'react-native';
import { Container } from '../components/Container';

const Welcome = () => (
  <Container>
    <StatusBar backgroundColor="blue" barStyle="light-content" />
  </Container>
);

export default Welcome;

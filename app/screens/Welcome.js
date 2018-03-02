import React from 'react';
import { StatusBar } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';


const Welcome = () => (
  <Container>
    <StatusBar backgroundColor="blue" barStyle="light-content" />
    <Logo />
  </Container>
);

export default Welcome;

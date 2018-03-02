import React, { Component } from 'react';
import { StatusBar } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { WelcomeText } from '../components/Text';
import { LoginButton } from '../components/Button';


class Welcome extends Component {
  handleLoginPress = () => {
    console.log('handle login');
  }
  render() {
    return (
      <Container>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Logo />
        <WelcomeText />
        <LoginButton onPress={this.handleLoginPress} buttonText="Login" />
      </Container>
    );
  }
}
export default Welcome;

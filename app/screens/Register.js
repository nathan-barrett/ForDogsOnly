import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';

import { Container } from '../components/Container';
import { RegistrationForm } from '../components/Forms';


class Register extends Component {
  handleLoginPress = () => {
    console.log('handle login');
  }
  render() {
    return (
      <Container>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <RegistrationForm />
      </Container>
    );
  }
}
export default Register;

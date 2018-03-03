import React, { Component } from 'react';
import { StatusBar } from 'react-native';

import { FormContainer } from '../components/Container';
import { RegistrationForm } from '../components/Forms';
import { LoginButton } from '../components/Button';


class Register extends Component {
  handleLoginPress = () => {
    console.log('handle login');
  }
  render() {
    return (
      <FormContainer style={{ justifyContent: 'flex-start' }}>
        <StatusBar backgroundColor="blue" barStyle="default" />
        <RegistrationForm />
        <LoginButton onPress={this.handleLoginPress} buttonText="Login" />
      </FormContainer>
    );
  }
}
export default Register;

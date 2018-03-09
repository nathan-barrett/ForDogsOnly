import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import PropTypes from 'prop-types';

import { FormContainer } from '../components/Container';
import { RegistrationForm } from '../components/Forms';
import { SubmitButton } from '../components/Button';


class Register extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  }
  handleLoginPress = () => {
    this.props.navigation.navigate('CreateProfile');
  }
  render() {
    return (
      <FormContainer style={{ justifyContent: 'flex-start' }}>
        <StatusBar barStyle="light-content" />
        <RegistrationForm />
        <SubmitButton
          onPress={this.handleLoginPress}
          buttonText="Continue"
        />
      </FormContainer>
    );
  }
}
export default Register;

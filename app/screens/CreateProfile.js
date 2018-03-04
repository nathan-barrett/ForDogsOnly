import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { FormContainer } from '../components/Container';
import { ProfileForm } from '../components/Forms';
import { SubmitButton } from '../components/Button';


class CreateProfile extends Component {
  handleLoginPress = () => {
    console.log('handle login');
  }
  render() {
    return (
      <FormContainer style={{ justifyContent: 'flex-start' }}>
        <StatusBar backgroundColor="blue" barStyle="default" />
        <SubmitButton
          onPress={this.handleLoginPress}
          buttonText="Continue"
        />
      </FormContainer>
    );
  }
}
export default CreateProfile;

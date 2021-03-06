import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StatusBar } from 'react-native';

import { FormContainer } from '../components/Container';
import { ProfileForm } from '../components/Forms';
import { SubmitButton } from '../components/Button';


class CreateProfile extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  }
  handleLoginPress = () => {
    this.props.navigation.navigate('HomeFeed');
  }
  render() {
    return (
      <FormContainer style={{ justifyContent: 'flex-start' }}>
        <StatusBar barStyle="light-content" />
        <ProfileForm />
        <SubmitButton
          onPress={this.handleLoginPress}
          buttonText="Continue"
        />
      </FormContainer>
    );
  }
}
export default CreateProfile;

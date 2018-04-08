import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import PropTypes from 'prop-types';

import { WelcomeImage } from '../components/Images';
import { Logo } from '../components/Logo';
import { LoginButton, CreateProfileButton } from '../components/Button';


class Welcome extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  }

  handleLoginPress = () => {
    this.props.navigation.navigate('HomeFeed');
  }

  handleCreateProfilePress = () => {
    this.props.navigation.navigate('Register');
  }

  render() {
    return (
      <WelcomeImage>
        <View style={{ justifyContent: 'space-around', flex: 1 }}>
          <StatusBar backgroundColor="blue" barStyle="dark-content" />
          <View style={{ marginTop: 125 }}>
            <Logo />
          </View>
          <View style={{ justifyContent: 'space-between' }}>
            <LoginButton
              buttonText="Login"
              onPress={this.handleLoginPress}
            />
            <View style={{ marginTop: 15 }}>
              <CreateProfileButton
                onPress={this.handleCreateProfilePress}
              />
            </View>
          </View>
        </View>
      </WelcomeImage>
    );
  }
}
export default Welcome;

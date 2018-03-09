import React, { Component } from 'react';
import { StatusBar, TouchableHighlight, Text } from 'react-native';
import PropTypes from 'prop-types';


import { ScrollContainer } from '../components/Container';
import { ProfilePicture, ImagePosts } from '../components/Images';
import { BioText } from '../components/Text';


class Profile extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  }
   onNavigate = () => {
     this.props.navigation.navigate('HomeFeed');
   };
   render() {
     return (
       <ScrollContainer>
         <StatusBar barStyle="light-content" />
         <ProfilePicture />
         <BioText />
         <TouchableHighlight onPress={this.onNavigate}>
           <Text>Go Home</Text>
         </TouchableHighlight>

         <ImagePosts source={require('../components/Images/assets/dog4.jpg')} />
         <ImagePosts source={require('../components/Images/assets/dog1.jpg')} />
         <ImagePosts source={require('../components/Images/assets/dog3.jpg')} />
         <ImagePosts source={require('../components/Images/assets/dog2.png')} />
       </ScrollContainer>
     );
   }
}

export default Profile;

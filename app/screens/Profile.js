import React from 'react';
import { StatusBar } from 'react-native';


import { ScrollContainer } from '../components/Container';
import { ProfilePicture, ImagePosts } from '../components/Images';
import { BioText } from '../components/Text';


const Profile = () => (
  <ScrollContainer>
    <StatusBar backgroundColor="blue" barStyle="light-content" />
    <ProfilePicture />
    <BioText />
    <ImagePosts source={require('../components/Images/assets/dog4.jpg')} />
    <ImagePosts source={require('../components/Images/assets/dog1.jpg')} />
    <ImagePosts source={require('../components/Images/assets/dog3.jpg')} />
    <ImagePosts source={require('../components/Images/assets/dog2.png')} />
  </ScrollContainer>
);

export default Profile;

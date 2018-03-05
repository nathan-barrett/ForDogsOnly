import React from 'react';
import { StatusBar } from 'react-native';
import { ScrollContainer } from '../components/Container';
import { ProfilePicture } from '../components/Images';
import { BioText } from '../components/Text';


const Profile = () => (
  <ScrollContainer>
    <StatusBar backgroundColor="blue" barStyle="light-content" />
    <ProfilePicture />
    <BioText />
  </ScrollContainer>
);


export default Profile;

import React from 'react';
import { StatusBar } from 'react-native';
import { FormContainer } from '../components/Container';
import { ProfilePicture } from '../components/Images';


const Profile = () => (
  <FormContainer >
    <StatusBar backgroundColor="blue" barStyle="light-content" />
    <ProfilePicture />
  </FormContainer>
);


export default Profile;

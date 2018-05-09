import React, { Component } from 'react';
import {
  StatusBar,
  View,
} from 'react-native';
import PropTypes from 'prop-types';


import { ProfileTop } from '../components/Container';
import { ProfilePicture } from '../components/Images';
import { ProfileText, ProfileDetails, ProfileDescription } from '../components/Text';
import { LoginButton } from '../components/Button';
import styles from './styles/ProfileStyles';


class Profile extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  }
   onNavigate = () => {
     this.props.navigation.navigate('HomeFeed');
   };
   render() {
     return (
       <View style={styles.profileContainer}>
         <StatusBar barStyle="light-content" />
         <ProfilePicture />

         <View style={styles.bottom}>
           <ProfileTop />
           <View style={{ paddingHorizontal: 15 }}>
             <ProfileText />
             <ProfileDetails />
             <ProfileDescription />
             <View style={{ alignItems: 'center', marginTop: 50 }}>
               <LoginButton
                 onPress={() => alert('message press')}
                 buttonText="Message Dog"
               />
             </View>
           </View>
         </View>
       </View>
     );
   }
}

export default Profile;

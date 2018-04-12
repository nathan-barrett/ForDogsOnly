import React, { Component } from 'react';
import {
  StatusBar,
  Text,
  View,
} from 'react-native';
import PropTypes from 'prop-types';


import { ProfileTop } from '../components/Container';
import { ProfilePicture } from '../components/Images';
import { ProfileText } from '../components/Text';
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
           </View>
         </View>
       </View>
     );
   }
}

export default Profile;

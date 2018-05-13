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
     const data = this.props.dogData[this.props.selectedId];

     return (
       <View style={styles.profileContainer}>
         <StatusBar barStyle="light-content" />
         <ProfilePicture />

         <View style={styles.bottom}>
           <ProfileTop />
           <View style={{ paddingHorizontal: 15 }}>
             <ProfileText
               name={data.name}
               gender={data.gender}
             />
             <ProfileDetails
               breed={data.breed}
               size={data.size}
               age={data.age}
             />
             <ProfileDescription />
             <View style={{ alignItems: 'center', marginTop: 50 }}>
               <LoginButton
                 onPress={() => console.log('this.props.dogData[selectedId]')}
                 buttonText="Message Dog"
               />
             </View>
           </View>
         </View>
       </View>
     );
   }
}

Profile.propTypes = {
  dogData: PropTypes.object,
  selectedId: PropTypes.number,

};

export default Profile;

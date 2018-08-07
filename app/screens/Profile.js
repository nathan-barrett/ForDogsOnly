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
  componentWillUnmount() {
    this.props.userProfile();
  }
   onNavigate = () => {
     if (this.props.userData.userProfile) {
       this.props.navigation.navigate('HomeFeed');
       setTimeout(() => this.props.userProfile(), 1000);
     }
     this.props.navigation.navigate('HomeFeed');
   };

   render() {
     const data = this.props.userData.userProfile ? this.props.userData.dogInfo : this.props.dogData[this.props.selectedId];
     const buttonText = this.props.userData.userProfile ? 'Edit Profile' : 'Send a Message';

     return (
       <View style={styles.profileContainer}>
         <StatusBar translucent />
         <ProfilePicture
           photos={data.photos}
           onPress={this.onNavigate}
         />

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
             <View style={{ justifyContent: 'center', alignSelf: 'center' }}>
               <ProfileDescription
                 description={data.description}
               />
             </View>
             <View style={{
                 alignItems: 'center', position: 'absolute', top: 260, right: 38,
               }}
             >
               <LoginButton
                 onPress={() => alert('you totally sent a message')}
                 buttonText={buttonText}
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
  selectedId: PropTypes.oneOfType([
    PropTypes.number, PropTypes.string,
  ]),
  userData: PropTypes.object,
  userProfile: PropTypes.func,
};

export default Profile;

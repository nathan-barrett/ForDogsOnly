import { connect } from 'react-redux';

import Profile from './Profile';
import userProfileBool from '../actions/UserDataActions';

const mapSTPs = state => ({
  selectedId: state.selectedDog,
  dogData: state.dogData,
  userData: state.userData,
});
const mapDTPs = dispatch => ({
  userProfile: () => dispatch(userProfileBool()),
});


export default connect(mapSTPs, mapDTPs)(Profile);

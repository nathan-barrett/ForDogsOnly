import { connect } from 'react-redux';


import HomeFeed from './HomeFeed';
import changeSelectedId from '../actions/AddSelected';
import userProfileBool from '../actions/UserDataActions';

const mapSTPs = state => ({
  selectedId: state.selectedDog,
  dogData: state.dogData,
  userData: state.userData,
});

const mapDTPs = dispatch => ({
  changeSelectedId: selectedId => dispatch(changeSelectedId(selectedId)),
  userProfile: () => dispatch(userProfileBool()),
});

export default connect(mapSTPs, mapDTPs)(HomeFeed);

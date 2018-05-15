import { connect } from 'react-redux';


import HomeFeed from './HomeFeed';
import changeSelectedId from '../actions/AddSelected';

const mapSTPs = state => ({
  selectedId: state.selectedDog,
  dogData: state.dogData,
  state,
});

const mapDTPs = dispatch => ({
  changeSelectedId: selectedId => dispatch(changeSelectedId(selectedId)),
});

export default connect(mapSTPs, mapDTPs)(HomeFeed);

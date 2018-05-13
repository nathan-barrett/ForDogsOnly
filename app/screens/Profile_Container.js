import { connect } from 'react-redux';

import Profile from './Profile';

const mapSTPs = state => ({
  selectedId: state.selectedDog,
  dogData: state.dogData,
});

export default connect(mapSTPs)(Profile);

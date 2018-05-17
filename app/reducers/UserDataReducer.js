import { InitialState, types } from '../constants';


const UserDataReducer = (state = InitialState.userData, action) => {
  switch (action.type) {
    case types.CHANGE_USER_BOOL:
      return Object.assign({}, state, {
        userProfile: !state.userProfile,
      });
    default:
      return state;
  }
};

export default UserDataReducer;

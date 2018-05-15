
import { InitialState, types } from '../constants';

const DogDataReducer = (state = InitialState.dogData, action) => {
  switch (action.type) {
    // case types.SET_INITIAL_STATE:
    //   return state;
    default:
      return state;
  }
};

export default DogDataReducer;

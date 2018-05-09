import { InitialState, types } from '../constants';

const selectedDogReducer = (state = InitialState.selectedDog, action) => {
  switch (action.type) {
    case types.CHANGE_SELECTED_DOG:
      return action.selectedId;
    default:
      return state;
  }
};

export default selectedDogReducer;

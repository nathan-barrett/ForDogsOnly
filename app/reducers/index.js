import { combineReducers } from 'redux';
import selectedDogReducer from './SelectedDogReducer';
import DogDataReducer from './DogDataReducer';
import UserDataReducer from './UserDataReducer';

export default combineReducers({
  selectedDog: selectedDogReducer,
  dogData: DogDataReducer,
  userData: UserDataReducer,
});

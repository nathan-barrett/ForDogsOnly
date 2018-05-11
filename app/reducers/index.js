import { combineReducers } from 'redux';
import selectedDogReducer from './SelectedDogReducer';
import DogDataReducer from './DogDataReducer';

export default combineReducers({
  selectedDog: selectedDogReducer,
  dogData: DogDataReducer,
});

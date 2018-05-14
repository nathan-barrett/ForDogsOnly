import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import selectedDogReducer from './SelectedDogReducer';
import DogDataReducer from './DogDataReducer';

export default combineReducers({
  selectedDog: selectedDogReducer,
  dogData: DogDataReducer,
  firestore: firestoreReducer,
});

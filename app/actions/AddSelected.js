import { types } from '../constants';


export const selectedDog = selectedId => ({
  type: types.CHANGE_SELECTED_DOG,
  selectedId,
});

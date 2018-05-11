import { types } from '../constants';


const changeSelectedId = selectedId => ({
  type: types.CHANGE_SELECTED_DOG,
  selectedId,
});

export default changeSelectedId;

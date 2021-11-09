import { combineReducers } from 'redux';
import {
  SET_LIST,
} from './actions';
const INITIAL_STATE = {
  list: [],
};

const reducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_LIST:
      return {
        ...state,
        list: action.value,
      };
    default:
      return state;
  }
};

export default combineReducers({
  app: reducers,
});

import { SET_FILTER } from '../constants/ActionTypes';

export default function setFilter(state='all', action) {
  switch(action.type) {
    case SET_FILTER:
      return action.filter;
    default:
      return state;
  }
}


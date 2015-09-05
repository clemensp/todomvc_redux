import { ADD_ITEM, TOGGLE_ITEM, REMOVE_ITEM } from '../actions/todo';
import _ from 'lodash';

export default function todoItems(state = [], action) {
  switch(action.type) {
    case ADD_ITEM:
      return [...state, { description: action.description }];
    case TOGGLE_ITEM:
      return [
        ...state.slice(0, action.index),
        _.assign({}, state[action.index], { completed: !(state[action.index].completed) }),
        ...state.slice(action.index+1, state.length)
      ];
    case REMOVE_ITEM:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index+1, state.length)
      ];
    default:
      return state;
  }
}

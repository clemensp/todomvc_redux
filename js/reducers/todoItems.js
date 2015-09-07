import { ADD_ITEM, TOGGLE_ITEM, REMOVE_ITEM, TOGGLE_ALL_ITEMS } from '../actions/todo';
import _ from 'lodash';

export default function todoItems(state = [], action) {
  switch(action.type) {
    case ADD_ITEM:
      if (action.description.trim()) {
        return [...state, { description: action.description }];
      } else {
        return state;
      }
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
    case TOGGLE_ALL_ITEMS:
      const allCompleted = _.all(state, s => s.completed );
      return _.map(state, function(s) {
        return _.extend({}, s, { completed: !allCompleted });
      });
    default:
      return state;
  }
}

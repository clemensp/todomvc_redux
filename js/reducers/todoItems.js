import { ADD_ITEM, TOGGLE_ITEM, REMOVE_ITEM, EDIT_ITEM, SAVE_ITEM, CANCEL_EDIT, TOGGLE_ALL_ITEMS, CLEAR_COMPLETED_ITEMS } from '../actions/todo';
import _ from 'lodash';

export default function todoItems(state = [], action) {
  switch(action.type) {
    case ADD_ITEM:
      if (action.description.trim()) {
        const newId = _.max([...(_.map(state, s => s.id)), -1]) + 1;
        return [...state, { id: newId, description: action.description, mode: "show" }];
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
    case EDIT_ITEM:
      return [
        ...state.slice(0, action.index),
        _.assign({}, state[action.index], { mode: "edit" }),
        ...state.slice(action.index+1, state.length)
      ];
    case CANCEL_EDIT:
      return [
        ...state.slice(0, action.index),
        _.assign({}, state[action.index], { mode: "show" }),
        ...state.slice(action.index+1, state.length)
      ];
    case SAVE_ITEM:
      if (action.description.trim()) {
        return [
          ...state.slice(0, action.index),
          _.assign({}, state[action.index], { mode: "show", description: action.description.trim() }),
          ...state.slice(action.index+1, state.length)
        ];
      } else {
        return [
          ...state.slice(0, action.index),
          ...state.slice(action.index+1, state.length)
        ];
      }
    case TOGGLE_ALL_ITEMS:
      const allCompleted = _.all(state, s => s.completed );
      return _.map(state, function(s) {
        return _.extend({}, s, { completed: !allCompleted });
      });
    case CLEAR_COMPLETED_ITEMS:
      return _.reject(state, function(i) {
        return i.completed;
      });
    default:
      return state;
  }
}

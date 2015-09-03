import { ADD_ITEM } from '../actions/todo';

export default function todoItems(state = [], action) {
  switch(action.type) {
    case ADD_ITEM:
      return [...state, { description: action.description }];
    default:
      return state;
  }
}

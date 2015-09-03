import { ADD_ITEM } from '../actions/todo';

export default function todoItems(state = [], action) {
  switch(action.type) {
    case ADD_ITEM:
      console.log("add item", action);
      return state;
    default:
      return state;
  }
}

import { ADD_ITEM, TOGGLE_ITEM, REMOVE_ITEM, EDIT_ITEM, SAVE_ITEM, CANCEL_EDIT, TOGGLE_ALL_ITEMS, CLEAR_COMPLETED_ITEMS } from '../actions/todo';
import _ from 'lodash';

export default function todoItems(todos = [], action) {
  switch(action.type) {
    case ADD_ITEM:
      if (action.description.trim()) {
        const newId = _.max([...(_.map(todos, s => s.id)), -1]) + 1;
        return [...todos, { id: newId, description: action.description, mode: "show" }];
      } else {
        return todos;
      }
    case TOGGLE_ITEM:
      return _.map(todos, todo => {
        return todo.id === action.id ?
          _.assign({}, todo, { completed: !(todo.completed) }) :
          todo
      });
    case REMOVE_ITEM:
      return _.reject(todos, todo => todo.id === action.id);
    case CANCEL_EDIT:
      return _.map(todos, todo => {
        return todo.id === action.id ?
          _.assign({}, todo, { mode: "show" }) :
          todo
      });
    case SAVE_ITEM:
      if (action.description.trim()) {
        return _.map(todos, todo => {
          return todo.id === action.id ?
            _.assign({}, todo, { mode: "show", description: action.description.trim()  }) :
            todo
        });
      } else {
        return _.reject(todos, todo => todo.id === action.id);
      }
    case TOGGLE_ALL_ITEMS:
      const allCompleted = _.all(todos, s => s.completed );
      return _.map(todos, function(s) {
        return _.extend({}, s, { completed: !allCompleted });
      });
    case CLEAR_COMPLETED_ITEMS:
      return _.reject(todos, function(i) {
        return i.completed;
      });
    default:
      return todos;
  }
}

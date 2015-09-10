import todoItems from './todoItems';
import filter from './filter';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  filter,
  todoItems
});

export default rootReducer;

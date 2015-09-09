import todoItems from './todoItems';
import allItemsCompleted from './allItemsCompleted';
import setFilter from './filter';

function rootReducer(state = {todoItems: [], allItemsCompleted: false}, action) {
  const withTodoItemUpdates = _.extend(
    {},
    state,
    { filter: setFilter(state.filter, action) },
    { todoItems: todoItems(state.todoItems, action) }
  );

  return allItemsCompleted(withTodoItemUpdates, action);
};

export default rootReducer;

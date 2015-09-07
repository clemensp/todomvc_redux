import todoItems from './todoItems';
import allItemsCompleted from './allItemsCompleted';

function rootReducer(state = {todoItems: [], allItemsCompleted: false}, action) {
  const withTodoItemUpdates = _.extend(
    {},
    state,
    { todoItems: todoItems(state.todoItems, action) }
  );

  return allItemsCompleted(withTodoItemUpdates, action);
};

export default rootReducer;

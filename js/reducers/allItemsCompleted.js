/* import { TOGGLE_ITEM } from '../actions/todo'; */
import _ from 'lodash';

export default function allItemsCompleted(state, action) {
  switch(action.type) {
    default:
      return _.extend(
        {},
        state,
        {
          allItemsCompleted: _.all(state.todoItems, todo => { return todo.completed; })
        }
      );
  }
}

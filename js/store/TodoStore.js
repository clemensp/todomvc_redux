// Redux utility functions
import { compose, createStore, applyMiddleware } from 'redux';
import persistToLocalStorage from 'redux-localstorage';
import _ from 'lodash';
import reducer from '../reducers';

// Redux DevTools store enhancers
import { devTools, persistState } from 'redux-devtools';

const finalCreateStore = compose(
  persistToLocalStorage(
    undefined, {
    key: "todomvc-redux",
    slicer: function(paths) {
      return function(state) {
        let subset = _.extend({}, state);
        subset.todoItems = _.map(subset.todoItems, function(i) {
          return _.omit(i, "mode");
        });
        return subset;
      }
    }
  }),
  // Provides support for DevTools:
  devTools(),
  // Lets you write ?debug_session=<name> in address bar to persist debug sessions
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore);

export const store = finalCreateStore(reducer);

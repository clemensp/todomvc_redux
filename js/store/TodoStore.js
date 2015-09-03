// Redux utility functions
import { compose, createStore, applyMiddleware } from 'redux';
import reducer from '../reducers';

// Redux DevTools store enhancers
import { devTools, persistState } from 'redux-devtools';

const finalCreateStore = compose(
  // Provides support for DevTools:
  devTools(),
  // Lets you write ?debug_session=<name> in address bar to persist debug sessions
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore);

export const store = finalCreateStore(reducer);

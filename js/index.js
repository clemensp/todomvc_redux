import React from 'react';
import { Provider } from 'react-redux';
import App from './containers/App';
import { store } from './store/TodoStore';
import { Router } from 'director';
import { setFilter } from './actions/todo';
import _ from 'lodash';

// React components for Redux DevTools
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

/* const setAllFilter = _.partial(store.dispatch, setFilter("all")); */
const dispatchSetFilter = (filter = "all") => {
  store.dispatch(setFilter(filter));
};

const routes = {
  '': {
    on: dispatchSetFilter,
    '/:filter': {
      on: dispatchSetFilter
    }
  }
};

const router = Router(routes);
router.init();

React.render(
  <div>
    <Provider store={store}>
      {() => <App />}
    </Provider>
    <DebugPanel top right bottom>
      <DevTools store={store} monitor={LogMonitor} />
    </DebugPanel>
  </div>
  ,
  document.getElementById('root')
);

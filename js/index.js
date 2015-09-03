import React from 'react';
import { Provider } from 'react-redux';
import App from './containers/App';
import { store } from './store/TodoStore';

React.render(
  <Provider store={store}>
    {() => <App />}
  </Provider>,
  document.getElementById('root')
);

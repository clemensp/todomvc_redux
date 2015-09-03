import React from 'react';
import { Provider } from 'react-redux';
import App from './containers/App';
import { store } from './store/TodoStore';

var todoItems = [
  { description: "todo1", completed: true },
  { description: "todo2", completed: false },
  { description: "todo3", completed: false }
];

/* React.render(<TodoApp todoItems={todoItems} />, document.getElementById('root')); */

React.render(
  <Provider store={store}>
    {() => <App />}
  </Provider>,
  document.getElementById('root')
);

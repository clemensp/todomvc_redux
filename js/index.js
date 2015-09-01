import React from 'react';
import TodoApp from './App';

var todoItems = [
  { description: "todo1", completed: true },
  { description: "todo2", completed: false },
  { description: "todo3", completed: false }
];

React.render(<TodoApp todoItems={todoItems} />, document.getElementById('root'));

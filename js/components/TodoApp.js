import React, { Component } from 'react';

export default class TodoApp extends Component {
  render() {
    const { addItem, todoItems } = this.props;

    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <AddTodo addItem={addItem}></AddTodo>
        </header>

        <section className="main">
          <ToggleAll></ToggleAll>
          <TodoList todoItems={todoItems} />
        </section>

        <TodoFooter todoItems={todoItems} />
      </section>
    );
  }
}

class AddTodo extends Component {
  render() {
    const { addItem } = this.props;

    var invokeAndClearOnEnter = f => {
      return e => {
        if (e.key === 'Enter') {
          f.call(null, e.target.value);
          React.findDOMNode(this.refs.text).value = '';
        }
      }
    }

    return (
      <input className="new-todo" ref="text" placeholder="What needs to be done?" autofocus onKeyDown={invokeAndClearOnEnter(addItem)}></input>
    );
  }
}

class ToggleAll extends Component {
  render() {
    return (
      <div>
        <input className="toggle-all" type="checkbox"></input>
        <label htmlFor="toggle-all">Mark all as complete</label>
      </div>
    );
  }
}

class TodoList extends Component {
  render() {
    var todoItems = [];

    this.props.todoItems.forEach(function(todoItem) {
      todoItems.push(
        <TodoItem description={todoItem.description} completed={todoItem.completed} />
      );
    });

    return (
      <ul className="todo-list">
        { todoItems }
      </ul>
    );
  }
}

class TodoItem extends Component {
  render() {
    return (
      <li className={this.props.completed ? "completed" : ""}>
        <div className="view">
          <input className="toggle" type="checkbox" checked></input>
          <label>{this.props.description}</label>
          <RemoveTodoItem />
        </div>
        <input className="edit" value="Create a TodoMVC template"></input>
      </li>
    );
  }
}

class RemoveTodoItem extends Component {
  render() {
    return (
      <button className="destroy"></button>
    );
  }
}

class TodoFooter extends Component {
  pendingTodoItems(todoItems) {
    var pendingTodoItems = [];
    todoItems.forEach(function(todoItem) {
      if (!todoItem.completed) {
        pendingTodoItems.push(todoItem);
      }
    });

    return pendingTodoItems;
  }

  render() {
    return (
      <footer className="footer">
        <span className="todo-count"><strong>{this.pendingTodoItems(this.props.todoItems).length}</strong> item left</span>
        <TodoFilters />
        <ClearCompleted />
      </footer>
    );
  }
}

class TodoFilters extends Component {
  render() {
    return (
      <ul className="filters">
        <li>
          <a className="selected" href="#/">All</a>
        </li>
        <li>
          <a href="#/active">Active</a>
        </li>
        <li>
          <a href="#/completed">Completed</a>
        </li>
      </ul>
    );
  }
}

class ClearCompleted extends Component {
  render() {
    return (
      <button className="clear-completed">Clear completed</button>
    );
  }
}

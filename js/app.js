import React, { Component } from 'react';

export default class TodoApp extends Component {
  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <AddTodo></AddTodo>
        </header>

        <section className="main">
          <ToggleAll></ToggleAll>
          <TodoList todoItems={this.props.todoItems} />
        </section>

        <TodoFooter></TodoFooter>
      </section>
    );
  }
}

class AddTodo extends Component {
  render() {
    return (
      <input className="new-todo" placeholder="What needs to be done?" autofocus></input>
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
          <button className="destroy"></button>
        </div>
        <input className="edit" value="Create a TodoMVC template"></input>
      </li>
    );
  }
}

class TodoFooter extends Component {
  render() {
    return (
      <footer className="footer">
        <span className="todo-count"><strong>0</strong> item left</span>
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
        <button className="clear-completed">Clear completed</button>
      </footer>
    );
  }
}

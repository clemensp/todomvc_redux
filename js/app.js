import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <AddTodo></AddTodo>
        </header>

        <section className="main">
          <input className="toggle-all" type="checkbox"></input>
          <label htmlFor="toggle-all">Mark all as complete</label>
          <ul className="todo-list">
            <li className="completed">
              <div className="view">
                <input className="toggle" type="checkbox" checked></input>
                <label>Taste JavaScript</label>
                <button className="destroy"></button>
              </div>
              <input className="edit" value="Create a TodoMVC template"></input>
            </li>
            <li>
              <div className="view">
                <input className="toggle" type="checkbox"></input>
                <label>Buy a unicorn</label>
                <button className="destroy"></button>
              </div>
              <input className="edit" value="Rule the web"></input>
            </li>
          </ul>
        </section>

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

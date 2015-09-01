import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input className="new-todo" placeholder="What needs to be done?" autofocus></input>
        </header>
      </section>
    );
  }
}


import React, { Component } from 'react';

export default class Header extends Component {
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
      <header className="header">
        <h1>todos</h1>
        <input className="new-todo" ref="text" placeholder="What needs to be done?" autoFocus onKeyDown={invokeAndClearOnEnter(addItem)}></input>
      </header>
    );
  }
}

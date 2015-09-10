import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';

export default class TodoApp extends Component {
  render() {
    const { addItem, toggleItem, removeItem, saveItem, todoItems, toggleAllItems, clearCompletedItems, filter } = this.props;

    return (
      <section className="todoapp">
        <Header addItem={addItem}></Header>

        {
          todoItems.length ? 
            <Main todoItems={todoItems} toggleAllItems={toggleAllItems} toggleItem={toggleItem} removeItem={removeItem} saveItem={saveItem} filter={filter} clearCompletedItems={clearCompletedItems} filter={filter}></Main>
          : null
        }
      </section>
    );
  }
}

import React, { Component } from 'react';
import _ from 'lodash';
import classNames from 'classnames';

export default class TodoApp extends Component {
  render() {
    const { addItem, toggleItem, removeItem, editItem, saveItem, cancelEdit, todoItems, allItemsCompleted, toggleAllItems } = this.props;

    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <AddTodo addItem={addItem}></AddTodo>
        </header>

        {
          todoItems.length ? 
            <div>
              <section className="main">
                <ToggleAll allItemsCompleted={allItemsCompleted} toggleAllItems={toggleAllItems}></ToggleAll>
                <TodoList todoItems={todoItems} toggleItem={toggleItem} removeItem={removeItem} editItem={editItem} saveItem={saveItem} cancelEdit={cancelEdit} />
              </section>

              <TodoFooter todoItems={todoItems} />
            </div>
          : null
        }
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
      <input className="new-todo" ref="text" placeholder="What needs to be done?" autoFocus onKeyDown={invokeAndClearOnEnter(addItem)}></input>
    );
  }
}

class ToggleAll extends Component {
  render() {
    const { allItemsCompleted, toggleAllItems } = this.props;

    return (
      <div>
        <input className="toggle-all" type="checkbox" checked={allItemsCompleted} onChange={toggleAllItems}></input>
        <label htmlFor="toggle-all">Mark all as complete</label>
      </div>
    );
  }
}

class TodoList extends Component {
  render() {
    const { toggleItem, removeItem, editItem, saveItem, cancelEdit, todoItems } = this.props;
    const todoItemRows = [];

    todoItems.forEach(function(todoItem, i) {
      todoItemRows.push(
        <TodoItem key={todoItem.description} mode={todoItem.mode} description={todoItem.description} completed={todoItem.completed} toggleItem={_.partial(toggleItem, i)} removeItem={_.partial(removeItem, i)} editItem={_.partial(editItem, i)} saveItem={_.partial(saveItem, i)} cancelEdit={_.partial(cancelEdit, i)} />
      );
    });

    return (
      <ul className="todo-list">
        { todoItemRows }
      </ul>
    );
  }
}

class TodoItem extends Component {
  componentDidUpdate() {
    this.refs.edit.getDOMNode().focus(); 
  }
  render() {
    const { completed, description, toggleItem, removeItem, editItem, saveItem, cancelEdit, mode } = this.props;
    const classes = classNames({
      completed: completed,
      editing: mode === "edit"
    });

    function invokeOnEnter(f) {
      return e => {
        if (e.key === 'Enter') {
          f.call(null, e);
        }
      }
    }

    function invokeWithValue(f) {
      return e => {
        f.call(null, e.target.value);
      }
    }

    function handleKey(e) {
      if (e.key === 'Enter') {
        saveItem(e.target.value);
      } else if (e.key === 'Escape') {
        e.target.value = description;
        cancelEdit();
      }
    }

    return (
      <li className={classes}>
        <div className="view">
          <input className="toggle" type="checkbox" checked={completed} onChange={toggleItem}></input>
          <label onDoubleClick={editItem}>{description}</label>
          <RemoveTodoItem removeItem={removeItem} />
        </div>
        <input className="edit" ref="edit" defaultValue={description} onKeyDown={handleKey} onBlur={invokeWithValue(saveItem)}></input>
      </li>
    );
  }
}

class RemoveTodoItem extends Component {
  render() {
    return (
      <button className="destroy" onClick={this.props.removeItem}></button>
    );
  }
}

class TodoFooter extends Component {
  render() {
    const { todoItems } = this.props;

    const pendingItemCount = _.select(todoItems, function(i) { return !i.completed; }).length;

    function message(itemCount) {
      if (itemCount === 1) {
        return " item left";
      } else {
        return " items left";
      }
    }

    return (
      <footer className="footer">
        <span className="todo-count"><strong>{pendingItemCount}</strong>{message(pendingItemCount)}</span>
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

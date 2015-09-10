import React, { Component } from 'react';
import classNames from 'classnames';
import _ from 'lodash';

export default class Main extends Component {
  render() {
    const { toggleItem, removeItem, saveItem, todoItems, toggleAllItems, clearCompletedItems, filter } = this.props;

    return (
      <div>
        <section className="main">
          <ToggleAll todoItems={todoItems} toggleAllItems={toggleAllItems}></ToggleAll>
          <TodoList todoItems={todoItems} toggleItem={toggleItem} removeItem={removeItem} saveItem={saveItem} filter={filter} />
        </section>

        <TodoFooter todoItems={todoItems} clearCompletedItems={clearCompletedItems} filter={filter} />
      </div>
    );
  }
}

class ToggleAll extends Component {
  render() {
    const { todoItems, toggleAllItems } = this.props;
    const allItemsCompleted = _.all(todoItems, todo => todo.completed);

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
    const FILTERS = {
      all: () => true,
      active: todo => !todo.completed,
      completed: todo => todo.completed
    };

    const { toggleItem, removeItem, saveItem, todoItems, filter } = this.props;
    const todoItemRows = [];

    const filteredTodoItems = _.select(todoItems, FILTERS[filter]);

    filteredTodoItems.forEach(function(todoItem) {
      todoItemRows.push(
        <TodoItem key={todoItem.id} todoItem={todoItem} toggleItem={toggleItem} removeItem={removeItem} saveItem={saveItem} />
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
  constructor() {
    super(arguments)
    this.state = {
      mode: "show"
    };
  }

  componentDidUpdate() {
    this.refs.edit.getDOMNode().focus(); 
  }

  render() {
    const { todoItem, toggleItem, removeItem, saveItem } = this.props;

    const classes = todoItem => {
      return classNames({
        completed: todoItem.completed,
        editing: this.state.mode === "edit"
      });
    }

    const toggleEdit = () => {
      if (this.state.mode === "show") {
        this.setState({
          mode: "edit"
        });
      } else {
        this.setState({
          mode: "show"
        });
      }
    }

    const invokeOnEnter = f => {
      return e => {
        if (e.key === 'Enter') {
          f.call(null, e);
        }
      }
    }

    const invokeWithValue = f => {
      return e => {
        f.call(null, e.target.value);
      }
    }

    const handleKey = (e, id) => {
      if (e.key === 'Enter') {
        saveItem(id, e.target.value);
        toggleEdit();
      } else if (e.key === 'Escape') {
        e.target.value = todoItem.description;
        toggleEdit();
      }
    }

    return (
      <li className={classes(todoItem)}>
        <div className="view">
          <input className="toggle" type="checkbox" checked={todoItem.completed} onChange={() => toggleItem(todoItem.id)}></input>
          <label onDoubleClick={toggleEdit}>{todoItem.description}</label>
          <RemoveTodoItem removeItem={() => removeItem(todoItem.id)} />
        </div>
        <input className="edit" ref="edit" defaultValue={todoItem.description} onKeyDown={e => handleKey(e, todoItem.id)} onBlur={invokeWithValue(value => saveItem(todoItem.id, value))}></input>
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
    const { todoItems, clearCompletedItems, filter } = this.props;

    const pendingItemCount = _.select(todoItems, function(i) { return !i.completed; }).length;
    const completedItemCount = _.select(todoItems, function(i) { return i.completed; }).length;

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
        <TodoFilters filter={filter} />
        {
          completedItemCount > 0 ? <ClearCompleted clearCompletedItems={clearCompletedItems} /> : null
        }
      </footer>
    );
  }
}

class TodoFilters extends Component {
  render() {
    const { filter } = this.props;

    return (
      <ul className="filters">
        <li>
          <a className={classNames({selected: filter === "all"})} href="#/">All</a>
        </li>
        <li>
          <a className={classNames({selected: filter === "active"})} href="#/active">Active</a>
        </li>
        <li>
          <a className={classNames({selected: filter === "completed"})} href="#/completed">Completed</a>
        </li>
      </ul>
    );
  }
}

class ClearCompleted extends Component {
  render() {
    const { clearCompletedItems } = this.props;

    return (
      <button className="clear-completed" onClick={clearCompletedItems}>Clear completed</button>
    );
  }
}

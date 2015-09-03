import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TodoApp from '../components/TodoApp';
import * as TodoActions from '../actions/todo';

function mapStateToProps(state) {
  return {
    todoItems: state.todoItems
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(TodoActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp);

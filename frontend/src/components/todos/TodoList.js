import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTodos, deleteTodo } from '../../actions/todos';
import Button from '@material-ui/core/Button';

class TodoList extends Component {
  componentDidMount() {
    console.log('dsa')
    this.props.getTodos();
    console.log(this.props.getTodos())
  }

  render() {
    return (
      <div className='ui relaxed divided list' style={{ marginTop: '2rem' }}>
          <Button variant="contained" color="primary">
      1231321 World 
    </Button>
        {this.props.todos.map(todo => (

          <div className='item' key={todo.id}>
          <Button variant="contained" color="primary"> {todo.id} 1231321 World </Button>
            <div className='right floated content'>
              <Link
                to={`/delete/${todo.id}`}
                className='small ui negative basic button'
              >
                Delete
              </Link>
            </div>
            <i className='large calendar outline middle aligned icon' />
            <div className='content'>
              <Link to={`/edit/${todo.id}`} className='header'>
                {todo.task}
              </Link>
              <div className='description'>{todo.created_at}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: Object.values(state.todos)
});

export default connect(
  mapStateToProps,
  { getTodos, deleteTodo }
)(TodoList);

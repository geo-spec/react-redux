import React, { Component } from 'react';
import TodoCreate from './TodoCreate';
import TodoList from './TodoList';
import MyButton from './MyButton'
import TestComponent from  './TestComponent'

class Dashboard extends Component {
  render() {
    return (
      <div className='ui container'>
        <TodoCreate />
        <TodoList />
        <TestComponent />
      </div>
    );
  }
}

export default Dashboard;

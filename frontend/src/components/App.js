import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';

import history from '../history';
import Header from './layout/Header';
import Dashboard from './todos/Dashboard';
import TodoDelete from './todos/TodoDelete';
import TodoEdit from './todos/TodoEdit';

import { Provider } from 'react-redux';
import store from '../store';

import Button from '@material-ui/core/Button';

class App extends Component {
  // componentDidMount - todo native fetch data. 
  // статья обо всех способах получения данных - https://www.robinwieruch.de/react-fetching-data
  componentDidMount() {
    fetch('/api/todos/')
    .then(response => response.json()
    .then(data => {

    })
    );
  }

  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Header />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/delete/:id' component={TodoDelete} />
            <Route exact path='/edit/:id' component={TodoEdit} />
          </Switch>
        </Router>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));

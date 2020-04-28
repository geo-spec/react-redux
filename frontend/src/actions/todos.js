import axios from 'axios';
import { reset } from 'redux-form';
import history from '../history';
import {GET_TODOS, GET_TODO, ADD_TODO, DELETE_TODO, EDIT_TODO, TEST_ACTION} from './types';
import {random} from "lodash/number";

// GET TODOS
export const getTodos = () => async dispatch => {
  const res = await axios.get('/api/todos/');
  // @todo
  dispatch({
    type: GET_TODOS,
    payload: res.data
  });
};

// GET TODO
export const getTodo = id => async dispatch => {
  const res = await axios.get(`/api/todos/${id}/`);
  dispatch({
    type: GET_TODO,
    payload: res.data
  });
};

// ADD TODO
export const addTodo = formValues => async dispatch => {
  const res = await axios.post('/api/todos/', { ...formValues });
  dispatch({
    type: ADD_TODO,
    payload: res.data
  });
  dispatch(reset('todoForm')); // フォーム送信後、値をクリアする
};

// DELETE TODO
export const deleteTodo = id => async dispatch => {
  await axios.delete(`/api/todos/${id}/`);
  dispatch({
    type: DELETE_TODO,
    payload: id
  });
  history.push('/');
};

// EDIT TODO
export const editTodo = (id, formValues) => async dispatch => {
  const res = await axios.patch(`/api/todos/${id}/`, formValues);
  dispatch({
    type: EDIT_TODO,
    payload: res.data
  });
  history.push('/');
};

// SAMPLE DISPATCH
export const getSampleData = () => async dispatch => {
  console.log('getSampleData')
  console.log(random(1, 10000));
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5'); //написать урл для получения тестовых
 // const res = await axios.get('/api/todos/16');

  const new_todo = {
    id:random(1, 10000),
    task:"Трям",
    created_at:"04/25/2020 16:23:10"
  }
  dispatch({
    type: TEST_ACTION,
    payload: new_todo
  });
};
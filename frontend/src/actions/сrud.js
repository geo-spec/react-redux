import axios from 'axios';
import {GET_CRUD, DELETE_CRUD, ADD_CRUD, EDIT_CRUD} from './types';
import {random} from "lodash/number";
import {last} from "lodash-es";

// GET_CRUD
export const getCrud = () => async dispatch => {
  const res = await axios.get('/api/crud/');
  // @todo
  dispatch({
    type: GET_CRUD,
    payload: res.data
  });
};


export const deleteCrud = (crud) => async dispatch => {
  const  last_id = last(Object.values(crud)).id
  const res = await axios.delete(`/api/crud/${last_id}`);
  // @todo
  dispatch({
    type: DELETE_CRUD,
    payload: last_id
  });
};


export const addCrud = (title) => async dispatch => {
  console.log('appCrud')
  console.log('title', title)
  const res = await axios.post('/api/crud/', { 'title': title});
  console.log('res.data', res.data)
  dispatch({
    type: ADD_CRUD,
    payload: res.data
  });
}

export const editCrud = (crud, title) => async dispatch => {
  const  last_id = last(Object.values(crud)).id
  const res = await axios.patch(`/api/crud/${last_id}/`, {'title': title});

  dispatch({
    type: EDIT_CRUD,
    payload: res.data
  })
}

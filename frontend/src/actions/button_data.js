// GET TODO
import axios from "axios";
import { connect } from 'react-redux';
import {CHANGE_BUTTON_TEXT, CLEAR_LIST, LOAD_LIST} from "./types";

export const getButtonData = () => async dispatch => {
  console.log('getButtonData')

  const res = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
  dispatch({
    type: CHANGE_BUTTON_TEXT,
    payload: res.data
  });
};
export const clearList = () => async dispatch => {
  console.log('clearList')
  // const res = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
  dispatch({
    type: CLEAR_LIST,
    payload: []
  });
};

export const  loadList = () => async dispatch => {
  console.log('loadList')
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts/');
  dispatch({
    type: LOAD_LIST,
    payload: res.data
  });
};

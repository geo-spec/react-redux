// GET TODO
import axios from "axios";
import { connect } from 'react-redux';
import {CHANGE_BUTTON_TEXT} from "./types";

export const getButtonData = () => async dispatch => {
  console.log('getButtonData')

  // const res = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
  dispatch({
    type: CHANGE_BUTTON_TEXT,
    payload: {'new_state':'getButtonDataPayload'}
  });
};
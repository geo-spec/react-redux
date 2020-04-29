import {
  CHANGE_BUTTON_TEXT, CLEAR_LIST, LOAD_LIST
} from '../actions/types';
import _ from "lodash";

const initialState = {
    'buttonText' : 'initialStateButtonText',
    'listItems' : [
      {'id':1, 'title': "один"},
      {'id': 2, 'title':"два"}]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_BUTTON_TEXT:
      console.log(action)
      console.log(action.payload)
      return {
        ...state,
        ...{"buttonText" : action.payload.title }

      };
    case CLEAR_LIST:
      console.log('CLEAR_LIST')
      return {
        ...state,
        'listItems' : []
      }

    case LOAD_LIST:
      console.log('LOAD_LIST')
      console.log(action.payload)
      return {
        ...state,
        'listItems' : action.payload
      }
    default:
      return state;
    }

}
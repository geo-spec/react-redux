import {
  CHANGE_BUTTON_TEXT
} from '../actions/types';
import _ from "lodash";


export default (state = {}, action) => {
  switch (action.type) {
    case CHANGE_BUTTON_TEXT:
      console.log(action)
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
    }

}
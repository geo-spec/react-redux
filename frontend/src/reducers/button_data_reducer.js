import {
  CHANGE_BUTTON_TEXT
} from '../actions/types';
import _ from "lodash";

const initialState = {
    'buttonText' : 'initialStateButtonText'
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
    default:
      return state;
    }

}
import _ from 'lodash';
import {
  GET_CRUD, DELETE_CRUD, ADD_CRUD, EDIT_CRUD
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_CRUD:
      return {
        ...state,
        ..._.mapKeys(action.payload, 'id')
      }
    case DELETE_CRUD:
      console.log(action.payload)
      return _.omit(state, action.payload)
    case EDIT_CRUD:
      console.log('EDIT_CRUD')
    case ADD_CRUD:
      console.log('ADD_CRUD')
      console.log(action.payload)
      return {
        ...state,
        [action.payload.id]: action.payload
      };

    default:
      return state;
  }
}
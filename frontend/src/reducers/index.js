import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import todos from './todos';
import button_data_reducer from './button_data_reducer'

export default combineReducers({
  form: formReducer,
  todos,
  button_data_reducer
});

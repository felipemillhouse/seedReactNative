import { resettableReducer } from 'reduxsauce';
import { combineReducers } from 'redux';

import user from './user';

const resettable = resettableReducer('user/LOG_OUT');

export default combineReducers({
  user: resettable(user),
});

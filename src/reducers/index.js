import { combineReducers } from 'redux';

import authReducer from './auth';

const reducers = combineReducers({
  auth: authReducer,
});

export default reducers;

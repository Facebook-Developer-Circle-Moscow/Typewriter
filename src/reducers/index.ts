import {combineReducers} from 'redux';

import {text} from './text';
import {view} from './view';

export const reducers = combineReducers({
  text,
  view,
});

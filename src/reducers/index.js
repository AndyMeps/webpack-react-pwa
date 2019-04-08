// @flow
import { combineReducers } from 'redux';
import type { Action } from '../types';

import todo from './todoReducer';

export default combineReducers<_, Action>({ todo });

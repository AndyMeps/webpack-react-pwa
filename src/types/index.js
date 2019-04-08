// @flow
import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';

import type { TodoState, TodoAction } from './todo';

export type ReduxInitAction = { type: '@@INIT' };

export type State = {
  +todo: TodoState
};

export type Action = { type: string }
  & (
    TodoAction
  | ReduxInitAction);

export type Dispatch = ReduxDispatch<Action>;

export type Store = ReduxStore<State, Action, Dispatch>;

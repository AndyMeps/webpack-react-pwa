// @flow
import type { TodoState, TodoAction } from '../types/todo';
import initialState from '../initialState';

const todoReducer = (state: TodoState = initialState.todo, action: TodoAction): TodoState => {
  switch (action.type) {
    case 'TODO_SET':
      return action.payload;
    default:
      return state;
  }
};

export default todoReducer;

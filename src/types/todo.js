// @flow
export type TodoState = ?string;

type TodoSetAction = {
  type: 'TODO_SET',
  payload: string,
};

type TodoUnusedAction = {
  type: 'TODO_UNUSED',
};

export type TodoAction = TodoSetAction | TodoUnusedAction;

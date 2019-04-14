// @flow
import React from 'react';
import { connect } from 'react-redux';
import type { State } from '../../types';

export type IndexProps = {|
  defaultedProp: number,
|};

type Props = {
  ...IndexProps,
  todoValue: ?string,
};

const IndexView = ({ todoValue, defaultedProp }: Props) => (
  <div>
    Index View - State Todo:
    {todoValue}
    Default
    {defaultedProp || '-'}
  </div>
);

IndexView.defaultProps = {
  defaultedProp: 5,
};

const mapStateToProps = (state: State) => ({
  todoValue: state.todo.value,
});

const ConnectedIndexView = connect<Props, IndexProps, _, _, _, _>(mapStateToProps)(IndexView);

export default ConnectedIndexView;

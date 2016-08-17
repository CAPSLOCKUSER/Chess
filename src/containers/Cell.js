// @flow

import React from 'react';
import {movePiece} from '../actions/chess';
import {connect} from 'react-redux';
import '../../style/Cell.scss';

import type { Point } from '../types/ChessTypes';

type CellProps = Point & {
  background: string,
  children: any,
  dispatch: (action: any) => void
}

let Cell = ({ dispatch, background, x, y, children }: CellProps) => {
  // console.log('RENDER CELL');
  return (
    <div
      className="cell"
      style={{ background }}
      onDragOver={event => {
        event.preventDefault();
      }}
      onDrop={event => {
        const from: Point = JSON.parse(event.dataTransfer.getData('text/plain'));
        dispatch(movePiece(from, { x, y }));
      }}
    >
      {children}
    </div>
  );
};

Cell = connect()(Cell);

export default Cell;

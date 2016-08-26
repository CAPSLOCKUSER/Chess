// @flow

import React from 'react';
import {movePiece} from '../actions/chess';
import {connect} from 'react-redux';
import validator from '../validators/chessValidator';
import { findByPos } from '../utils';
import classNames from 'classnames';
import '../../style/Cell.scss';

import type {Point, Cell as CellType} from '../types/ChessTypes';

type CellProps = Point & {
  background: string,
  data?: CellType,
  dispatch: (action: any) => void,
}

const ghostContainer = document.createElement('div');
ghostContainer.style.position = 'absolute';
ghostContainer.style.top = '-200px';
document.body.appendChild(ghostContainer);

let Cell = ({ dispatch, background, x, y, data = {} }: CellProps, { store }) => {
  console.log('RENDER CELL');
  const hasPiece = !!data;
  const getFrom = (event: DragEvent): Point => {
    if (!event.dataTransfer) {
      throw new Error('event.dataTransfer is falsy');
    }
    const { x, y } = JSON.parse(event.dataTransfer.getData('application/json'));
    return { x, y };
  };
  const cellClass = classNames('cell', data.value, data.color).toLowerCase();
  let acceptingDrop = false;
  return (
    <div
      className={cellClass}
      style={{ background }}

      draggable={hasPiece}
      onDragStart={event => {
        const state = store.getState().chess;
        if (state.activePlayer !== data.color) {
          event.preventDefault();
          return;
        }

        const ghost = event.target.cloneNode(true);
        ghost.style.backgroundColor = 'transparent';
        ghost.style.position = 'absolute';
        ghost.style.top = '0';
        ghost.style.left = '0';
        ghost.style.textAlign = 'center';
        ghostContainer.appendChild(ghost);
        event.dataTransfer.setDragImage(ghost, 50, 50);

        event.target.style.backgroundColor = 'transparent';
        event.target.classList.add('selected');
        event.dataTransfer.setData('application/json', JSON.stringify({ x, y }));
      }}
      onDragEnter={event => {
        const state = store.getState().chess;
        const action = movePiece(getFrom(event), { x, y });
        if (validator(state, action)) {
          event.target.style.background = '#c6d097';
          acceptingDrop = true;
        }
      }}
      onDragOver={event => {
        if (acceptingDrop) {
          event.dataTransfer.dropEffect = 'move';
          event.preventDefault();
        }
      }}
      onDragLeave={event => {
        event.target.style.background = background;
        acceptingDrop = false;
      }}
      onDragEnd={event => {
        event.target.classList.remove('selected');
        ghostContainer.innerHTML = '';
      }}
      onDrop={event => {
        event.preventDefault();
        dispatch(movePiece(getFrom(event), { x, y }));
        event.target.style.background = background;
        acceptingDrop = false;
      }}
    />
  );
};

Cell.contextTypes = {
  store: React.PropTypes.object
};

const mapStateToProps = ({ chess: { board } }, { x, y }) => {
  return {
    data: board.find(findByPos(x, y)),
  }
};

Cell = connect(mapStateToProps)(Cell);

export default Cell;

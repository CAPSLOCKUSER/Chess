// @flow

import React from 'react';
import {movePiece} from '../actions/chess';
import {connect} from 'react-redux';
import {PIECES_HTML} from '../constants';
import validator from '../validators/chessValidator';
import '../../style/Cell.scss';

import type {Point, Cell as CellType} from '../types/ChessTypes';

type CellProps = Point & {
  background: string,
  data: CellType,
  dispatch: (action: any) => void,
}

const ghostContainer = document.createElement('div');
ghostContainer.style.position = 'absolute';
ghostContainer.style.top = '-200px';
document.body.appendChild(ghostContainer);

let Cell = ({ dispatch, background, x, y, data }: CellProps, { store }) => {
  console.log('RENDER CELL');
  const hasPiece = !!data;
  const html = hasPiece ? PIECES_HTML[data.color][data.value] : null;
  const getFrom = (event: Event): Point => {
    const { x, y } = JSON.parse(event.dataTransfer.getData('application/json'));
    return { x, y };
  };
  return (
    <div
      className="cell"
      style={{ background }}
      dangerouslySetInnerHTML={{__html: html}}

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
      onDragOver={event => {
        const action = movePiece(getFrom(event), { x, y });
        const state = store.getState().chess;
        if (validator(state, action)) {
          event.dataTransfer.dropEffect = 'move';
          event.preventDefault();
        }
      }}
      onDragEnter={event => {
        const state = store.getState().chess;
        const action = movePiece(getFrom(event), { x, y });
        if (validator(state, action)) {
          event.target.style.background = '#c6d097';
        }
      }}
      onDragLeave={event => {
        event.target.style.background = background;
      }}
      onDragEnd={event => {
        event.target.classList.remove('selected');
        ghostContainer.innerHTML = '';
      }}
      onDrop={event => {
        event.preventDefault();
        {/*const state = store.getState().chess;*/}
        const action = movePiece(getFrom(event), { x, y });
        dispatch(action);
        event.target.style.background = background;
        {/*if (validator(state, action)) {
          event.target.style.background = background;
          dispatch(action);
        }*/}
      }}
    />
  );
};

Cell.contextTypes = {
  store: React.PropTypes.object
};

const mapStateToProps = ({ chess: { board } }, { x, y }) => {
  return {
    data: board.find(other => x === other.x && y === other.y),
  }
};

Cell = connect(mapStateToProps)(Cell);

export default Cell;

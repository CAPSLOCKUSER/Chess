// @flow

import React from 'react';
import {movePiece} from '../actions/chess';
import {connect} from 'react-redux';
import {PIECES_HTML} from '../constants';
import '../../style/Cell.scss';

import type { Point, Cell as CellType } from '../types/ChessTypes';

type CellProps = Point & {
  background: string,
  data: CellType,
  dispatch: (action: any) => void
}

const div = document.createElement('div');
div.style.position = 'absolute';
div.style.top = '-200px';
const ghostContainer = document.body.appendChild(div);

let Cell = ({ dispatch, background, x, y, data }: CellProps) => {
  // console.log('RENDER CELL');
  const hasPiece = !!data;
  const html = hasPiece ? PIECES_HTML[data.color][data.value] : null;
  return (
    <div
      className="cell"
      style={{ background }}
      dangerouslySetInnerHTML={{__html: html}}

      draggable={hasPiece}
      onDragStart={event => {
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
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
      }}
      onDragEnter={event => {
        event.target.style.background = '#c6d097';
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

        event.target.style.background = background;
        const from: Point = JSON.parse(event.dataTransfer.getData('application/json'));
        dispatch(movePiece(from, { x, y }));
      }}
    />
  );
};

Cell = connect()(Cell);

export default Cell;

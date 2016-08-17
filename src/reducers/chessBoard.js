// @flow

import { ACTION_TYPES as AT, DEFAULT_BOARD } from '../constants';
import type { ChessBoard } from '../types/ChessTypes';
import type { MovePieceAction } from '../types/ChessAction';

import find from 'lodash/find';

const chessBoard = (
  state: ChessBoard = DEFAULT_BOARD,
  action: MovePieceAction
): ChessBoard => {
  switch (action.type) {
    case AT.MOVE_PIECE:
      const movedPiece = state.find(({ x, y }) => x === action.from.x && y === action.from.y);
      const newState = state
        .filter(({ x, y }) => !(x === action.to.x && y === action.to.y))
        .filter(({ x, y }) => !(x === action.from.x && y === action.from.y));
      return [
        ...newState,
        {
          x: action.to.x,
          y: action.to.y,
          color: movedPiece.color,
          value: movedPiece.value,
        }
      ];

    default:
      return state
  }
};

export default chessBoard;

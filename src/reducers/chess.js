// @flow

import { ACTION_TYPES as AT, DEFAULT_BOARD } from '../constants';
import type { MovePieceAction } from '../types/ChessAction';
import type { ChessBoard, ChessGame } from '../types/ChessTypes';
import { findByPos } from '../utils';
import remove from 'lodash/remove';

const getDefaultGame = (): ChessGame => ({
  board: DEFAULT_BOARD,
  activePlayer: 'WHITE',
  removedPieces: []
});

const chess = (
  state: ChessGame = getDefaultGame(),
  action: MovePieceAction
): ChessGame => {
  switch (action.type) {
    case AT.MOVE_PIECE:
      const newBoard: ChessBoard = [...state.board];
      const movedPiece = remove(newBoard, findByPos(action.from.x, action.from.y))[0];
      const removedPiece = remove(newBoard, findByPos(action.to.x, action.to.y))[0];
      newBoard.push({
        x: action.to.x,
        y: action.to.y,
        color: movedPiece.color,
        value: movedPiece.value,
      });

      return {
        activePlayer: state.activePlayer === 'WHITE' ? 'BLACK' : 'WHITE',
        removedPieces: [...state.removedPieces, removedPiece],
        board: newBoard,
      };

    default:
      return state;
  }
};

export default chess;

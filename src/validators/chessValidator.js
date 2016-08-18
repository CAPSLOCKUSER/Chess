// @flow

import { ACTION_TYPES as AT } from '../constants';
import { findByPos } from '../utils';
import type { ChessGame, Point } from '../types/ChessTypes';

const getWay = (from: Point, to: Point): Point => {
  return {
    horizontal: Math.abs(from.x - to.x),
    vertical: Math.abs(from.y - to.y),
  }
};

const chessValidator = (state: ChessGame, { type: actionType, from, to }: MovePieceAction): boolean => {
  switch (actionType) {
    case AT.MOVE_PIECE:
      const { color, value } = state.board.find(findByPos(from.x, from.y));
      const removedPiece = state.board.find(findByPos(to.x, to.y));

      if (color !== state.activePlayer) {
        return false;
      }

      if (from.x === to.x && from.y === to.y) {
        return false;
      }

      if (!!removedPiece && color === removedPiece.color) {
        return false;
      }

      const way = getWay(from, to);
      switch (value) {
        case 'PAWN':
          if (way.horizontal !== 0) {
            return false;
          }
          if (color === 'WHITE') {
            const isStarting = from.y === 1;
            const distance = from.y - to.y;
            return isStarting ? -distance <= 2 : -distance === 1;
          } else {
            const isStarting = from.y === 6;
            const distance = from.y - to.y;
            return isStarting ? distance <= 2 : distance === 1;
          }
        case 'ROOK':
          return way.horizontal === 0 || way.vertical === 0;
        case 'KNIGHT':
          return way.horizontal + way.vertical === 3;
        case 'BISHOP':
          return way.horizontal === way.vertical;
        case 'QUEEN':
          return (way.horizontal === way.vertical) || way.horizontal === 0 || way.vertical === 0;
        case 'KING':
          return way.horizontal * way.vertical <= 1;
        default:
          return false;
      }

      return true;

    default:
      return false;
  }
};

export default chessValidator;

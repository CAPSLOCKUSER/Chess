// @flow

import { ACTION_TYPES as AT } from '../constants';
import { findByPos } from '../utils';
import type { ChessGame, Point } from '../types/ChessTypes';
import type { MovePieceAction } from '../types/ChessAction';

type WayType = {
  horizontal: number,
  vertical: number,
}

const getWay = (from: Point, to: Point): WayType => {
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
          const direction = color === 'WHITE' ? 1 : -1;
          const startingPosition = color === 'WHITE' ? 1 : 6;
          const forwardDistance = direction * (to.y - from.y);
          const isStarting = from.y === startingPosition;

          if (way.horizontal === 1) {
            return !!removedPiece && forwardDistance === 1;
          } else if (way.horizontal === 0) {
            if (!!removedPiece) {
              return false;
            }
            return isStarting ? forwardDistance <= 2 : forwardDistance === 1;
          }

          return false;
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
    default:
      return false;
  }
};

export default chessValidator;

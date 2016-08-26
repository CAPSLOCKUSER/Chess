// @flow

import { ACTION_TYPES as AT } from '../constants';
import { findByPos } from '../utils';
import type { ChessGame, ChessBoard, Point } from '../types/ChessTypes';
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

const isMoveShapeValid = ({ color, value }, removedPiece, from, to) => {
  const { horizontal, vertical } = getWay(from, to);
  switch (value) {
    case 'PAWN':
      const direction = color === 'WHITE' ? 1 : -1;
      const startingPosition = color === 'WHITE' ? 1 : 6;
      const forwardDistance = direction * (to.y - from.y);
      const isStarting = from.y === startingPosition;

      if (horizontal === 1) {
        return !!removedPiece && forwardDistance === 1;
      } else if (horizontal === 0) {
        if (!!removedPiece) {
          return false;
        }
        return isStarting ? forwardDistance <= 2 : forwardDistance === 1;
      }

      return false;
    case 'ROOK':
      return horizontal === 0 || vertical === 0;
    case 'KNIGHT':
      return Math.min(horizontal, vertical) === 1 && Math.max(horizontal, vertical) === 2;
    case 'BISHOP':
      return horizontal === vertical;
    case 'QUEEN':
      return (horizontal === vertical) || horizontal === 0 || vertical === 0;
    case 'KING':
      return horizontal <= 1 && vertical <= 1;
    default:
      return false;
  }
};

const isCellClear = (board: ChessBoard, { x, y }: { x: number, y: number }) => {
  return !board.find(findByPos(x, y));
};

const isPathUnblocked = (board, { value }, from, to) => {
  switch (value) {
    case 'PAWN':
      const distance = Math.abs(to.y - from.y);
      if (distance === 2) {
        return isCellClear(board, {
          x: from.x,
          y: from.y === 1 ? 2 : 5,
        });
      }
      return true;
    case 'KNIGHT':
      return true;
    case 'ROOK':
    case 'BISHOP':
    case 'QUEEN':
      const horizontal = Math.sign(to.x - from.x);
      const vertical = Math.sign(to.y - from.y);
      // i know this loop is not very nice, but felt so good to write, okey?
      for (
        let i = from.x + horizontal, j = from.y + vertical;
        i !== to.x || j !== to.y;
        i += horizontal, j += vertical
      ) {
        if (!isCellClear(board, { x: i, y: j })) {
          return false;
        }
      }
      return true;
    case 'KING':
      return true; // TODO: castling
    default:
      return false;
  }
};

const chessValidator = (state: ChessGame, { type: actionType, from, to }: MovePieceAction): boolean => {
  switch (actionType) {
    case AT.MOVE_PIECE:
      const movedPiece = state.board.find(findByPos(from.x, from.y));
      const removedPiece = state.board.find(findByPos(to.x, to.y));

      if (movedPiece.color !== state.activePlayer) {
        return false;
      }

      if (from.x === to.x && from.y === to.y) {
        return false;
      }

      if (!!removedPiece && movedPiece.color === removedPiece.color) {
        return false;
      }

      if (!isMoveShapeValid(movedPiece, removedPiece, from, to)) {
        return false;
      }

      return isPathUnblocked(state.board, movedPiece, from, to);

    default:
      return false;
  }
};

export default chessValidator;

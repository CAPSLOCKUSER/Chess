// @flow

import { ACTION_TYPES as AT } from '../constants';
import type { Point } from '../types/ChessTypes';

export function movePiece(from: Point, to: Point) {
  return {
    type: AT.MOVE_PIECE,
    from,
    to,
  };
}

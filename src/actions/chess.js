import { ACTION_TYPES as AT } from '../constants';

export function movePiece(from, to) {
  return {
    type: AT.MOVE_PIECE,
    from,
    to,
  };
}

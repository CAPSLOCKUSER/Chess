import { ActionTypes as AT } from '../constants';

export function movePiece(a, b, x, y) {
  return {
    type: AT.MOVE_PIECE,
    from: {
      x: parseInt(a, 10),
      y: parseInt(b, 10),
    },
    to: {
      x: parseInt(x, 10),
      y: parseInt(y, 10),
    },
  };
}

import {ActionTypes as AT, DEFAULT_BOARD} from '../constants';

import find from 'lodash/find';

const chessBoard = (state = DEFAULT_BOARD, action) => {
  switch (action.type) {
    case AT.MOVE_PIECE:
      console.log('move');
      const movedPiece = find(state, ({ x, y }) => x === action.from.x && y === action.from.y);
      const newState = state
        .filter(({ x, y }) => !(x === action.to.x && y === action.to.y))
        .filter(({ x, y }) => !(x === action.from.x && y === action.from.y));
      console.log(movedPiece);
      return [
        ...newState,
        {
          x: action.to.x,
          y: action.to.y,
          piece: movedPiece.piece,
        }
      ];

    default:
      return state
  }
};

export default chessBoard;

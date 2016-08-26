// @flow

import keyMirror from 'keymirror';

import type { ChessBoard } from './types/ChessTypes';

export const ACTION_TYPES: { [key: string]: string } = keyMirror({
  MOVE_PIECE: null,
});

export const STORAGE_KEY = 'chess-app-storage-key';

export const DEFAULT_BOARD: ChessBoard = [
  { x: 0, y: 0, color: 'WHITE', value: 'ROOK' },
  { x: 1, y: 0, color: 'WHITE', value: 'KNIGHT' },
  { x: 2, y: 0, color: 'WHITE', value: 'BISHOP' },
  { x: 3, y: 0, color: 'WHITE', value: 'QUEEN' },
  { x: 4, y: 0, color: 'WHITE', value: 'KING' },
  { x: 5, y: 0, color: 'WHITE', value: 'BISHOP' },
  { x: 6, y: 0, color: 'WHITE', value: 'KNIGHT' },
  { x: 7, y: 0, color: 'WHITE', value: 'ROOK' },

  { x: 0, y: 1, color: 'WHITE', value: 'PAWN' },
  { x: 1, y: 1, color: 'WHITE', value: 'PAWN' },
  { x: 2, y: 1, color: 'WHITE', value: 'PAWN' },
  { x: 3, y: 1, color: 'WHITE', value: 'PAWN' },
  { x: 4, y: 1, color: 'WHITE', value: 'PAWN' },
  { x: 5, y: 1, color: 'WHITE', value: 'PAWN' },
  { x: 6, y: 1, color: 'WHITE', value: 'PAWN' },
  { x: 7, y: 1, color: 'WHITE', value: 'PAWN' },

  { x: 0, y: 6, color: 'BLACK', value: 'PAWN' },
  { x: 1, y: 6, color: 'BLACK', value: 'PAWN' },
  { x: 2, y: 6, color: 'BLACK', value: 'PAWN' },
  { x: 3, y: 6, color: 'BLACK', value: 'PAWN' },
  { x: 4, y: 6, color: 'BLACK', value: 'PAWN' },
  { x: 5, y: 6, color: 'BLACK', value: 'PAWN' },
  { x: 6, y: 6, color: 'BLACK', value: 'PAWN' },
  { x: 7, y: 6, color: 'BLACK', value: 'PAWN' },

  { x: 0, y: 7, color: 'BLACK', value: 'ROOK' },
  { x: 1, y: 7, color: 'BLACK', value: 'KNIGHT' },
  { x: 2, y: 7, color: 'BLACK', value: 'BISHOP' },
  { x: 3, y: 7, color: 'BLACK', value: 'QUEEN' },
  { x: 4, y: 7, color: 'BLACK', value: 'KING' },
  { x: 5, y: 7, color: 'BLACK', value: 'BISHOP' },
  { x: 6, y: 7, color: 'BLACK', value: 'KNIGHT' },
  { x: 7, y: 7, color: 'BLACK', value: 'ROOK' },
];

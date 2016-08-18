// @flow

export type Dimension = 0|1|2|3|4|5|6|7;

export type Point = {
  x: Dimension,
  y: Dimension,
}

export type Color = 'WHITE' | 'BLACK';

export type Value =
    'KING'
  | 'QUEEN'
  | 'ROOK'
  | 'BISHOP'
  | 'KNIGHT'
  | 'PAWN'

export type Piece = {
  color: Color,
  value: Value,
}

export type Cell = Point & Piece;

export type ChessBoard = Array<Cell>;

export type ChessGame = {
  board: ChessBoard,
  activePlayer: Color,
  removedPieces: Array<Piece>,
}

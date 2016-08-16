import keyMirror from 'keymirror';

export const ActionTypes = keyMirror({
  MOVE_PIECE: null,
});

export const STORAGE_KEY = 'chess-app-storage-key';

export const PIECES = {
  WHITE: {
    KING: '&#9812',
    QUEEN: '&#9813',
    ROOK: '&#9814',
    BISHOP: '&#9815',
    KNIGHT: '&#9816',
    PAWN: '&#9817',
  },
  BLACK: {
    KING: '&#9818',
    QUEEN: '&#9819',
    ROOK: '&#9820',
    BISHOP: '&#9821',
    KNIGHT: '&#9822',
    PAWN: '&#9823',
  }
};

export const DEFAULT_BOARD = [
  { x: 0, y: 0, piece: PIECES.WHITE.ROOK },
  { x: 1, y: 0, piece: PIECES.WHITE.KNIGHT },
  { x: 2, y: 0, piece: PIECES.WHITE.BISHOP },
  { x: 3, y: 0, piece: PIECES.WHITE.QUEEN },
  { x: 4, y: 0, piece: PIECES.WHITE.KING },
  { x: 5, y: 0, piece: PIECES.WHITE.BISHOP },
  { x: 6, y: 0, piece: PIECES.WHITE.KNIGHT },
  { x: 7, y: 0, piece: PIECES.WHITE.ROOK },

  { x: 0, y: 1, piece: PIECES.WHITE.PAWN },
  { x: 1, y: 1, piece: PIECES.WHITE.PAWN },
  { x: 2, y: 1, piece: PIECES.WHITE.PAWN },
  { x: 3, y: 1, piece: PIECES.WHITE.PAWN },
  { x: 4, y: 1, piece: PIECES.WHITE.PAWN },
  { x: 5, y: 1, piece: PIECES.WHITE.PAWN },
  { x: 6, y: 1, piece: PIECES.WHITE.PAWN },
  { x: 7, y: 1, piece: PIECES.WHITE.PAWN },

  { x: 0, y: 7, piece: PIECES.BLACK.ROOK },
  { x: 1, y: 7, piece: PIECES.BLACK.KNIGHT },
  { x: 2, y: 7, piece: PIECES.BLACK.BISHOP },
  { x: 3, y: 7, piece: PIECES.BLACK.QUEEN },
  { x: 4, y: 7, piece: PIECES.BLACK.KING },
  { x: 5, y: 7, piece: PIECES.BLACK.BISHOP },
  { x: 6, y: 7, piece: PIECES.BLACK.KNIGHT },
  { x: 7, y: 7, piece: PIECES.BLACK.ROOK },

  { x: 0, y: 6, piece: PIECES.BLACK.PAWN },
  { x: 1, y: 6, piece: PIECES.BLACK.PAWN },
  { x: 2, y: 6, piece: PIECES.BLACK.PAWN },
  { x: 3, y: 6, piece: PIECES.BLACK.PAWN },
  { x: 4, y: 6, piece: PIECES.BLACK.PAWN },
  { x: 5, y: 6, piece: PIECES.BLACK.PAWN },
  { x: 6, y: 6, piece: PIECES.BLACK.PAWN },
  { x: 7, y: 6, piece: PIECES.BLACK.PAWN },
]

/*white chess king	♔	U+2654	&#9812;
 white chess queen	♕	U+2655	&#9813;
 white chess rook	♖	U+2656	&#9814;
 white chess bishop	♗	U+2657	&#9815;
 white chess knight	♘	U+2658	&#9816;
 white chess pawn	♙	U+2659	&#9817;
 black chess king	♚	U+265A	&#9818;
 black chess queen	♛	U+265B	&#9819;
 black chess rook	♜	U+265C	&#9820;
 black chess bishop	♝	U+265D	&#9821;
 black chess knight	♞	U+265E	&#9822;
 black chess pawn	♟	U+265F	&#9823;
 */

import React from 'react';
import range from 'lodash/range';
import Cell from '../components/Cell';
import Piece from '../components/Piece';
import {connect} from 'react-redux';
import find from 'lodash/find';
import { movePiece } from '../actions/chess';
import '../../style/Board.scss';

let Board = ({ dispatch, chessBoard }) => {
  const handleMove = (a, b, x, y) => {
    dispatch(movePiece(a, b, x, y));
  };
  const getPiece = (i, j) => {
    const cell = find(chessBoard, ({ x, y }) => x === i && y === j);
    if (!cell) {
      return null;
    }
    return (
      <Piece
        x={i}
        y={j}
        html={cell.piece}
      />
    );
  };
  return (
    <div className="board">
      {range(8).map((_, j) => (
        <div className="row clearfix" key={j}>
          {range(8).map((_, i) => (
            <Cell
              key={i}
              background={i % 2 !== j % 2 ? '#c0c0c0' : 'white'}
              x={i}
              y={j}
              handleMove={handleMove}
            >
              {getPiece(i, j)}
            </Cell>
          ))}
        </div>
      ))}
    </div>
  )
};

const mapStateToProps = ({ chessBoard }) => {
  return {
    chessBoard,
  }
};

Board = connect(mapStateToProps)(Board);

export default Board;

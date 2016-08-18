import React from 'react';
import range from 'lodash/range';
import Cell from './Cell';
import {connect} from 'react-redux';
import find from 'lodash/find';
import '../../style/Board.scss';

let Board = ({ chessBoard }) => {
  console.log('board REDER');
  return (
    <div className="board">
      {range(8).map(j => (
        <div className="row clearfix" key={j}>
          {range(8).map(i => {
            return (
              <Cell
                key={i}
                background={i % 2 !== j % 2 ? '#c0c0c0' : 'white'}
                x={i}
                y={j}
                data={find(chessBoard, ({ x, y }) => x === i && y === j)}
              />
            );
          })}
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

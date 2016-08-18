import React from 'react';
import range from 'lodash/range';
import Cell from '../containers/Cell';
import '../../style/Board.scss';

const Board = () => {
  console.log('board REDER');
  return (
    <div className="board">
      {range(8).map(j => (
        <div className="row clearfix" key={j}>
          {range(8).map(i => (
              <Cell
                key={i}
                background={i % 2 !== j % 2 ? '#c0c0c0' : 'white'}
                x={i}
                y={j}
              />
            )
          )}
        </div>
      ))}
    </div>
  )
};

export default Board;

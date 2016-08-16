import React from 'react';
import '../../style/Cell.scss';

const Cell = ({ background, x, y, children, handleMove }) => (
  <div
    className="cell"
    style={{ background }}
    data-x={x}
    data-y={y}
    onDragOver={event => {
      event.preventDefault();
    }}
    onDrop={event => {
      const { x, y } = event.target.dataset;
      const { x: a, y: b } = JSON.parse(event.dataTransfer.getData('text/plain'));
      handleMove(a, b, x, y);
    }}
  >
    {children}
  </div>
);

export default Cell;

import React from 'react';
import '../../style/Piece.scss';

const Piece = ({ html, x, y }) => (
  <div
    className="piece"
    dangerouslySetInnerHTML={{__html: html}}
    draggable="true"
    onDragStart={event => {
      event.dataTransfer.setData('text/plain', JSON.stringify({ x, y }));
    }}
  />
);

export default Piece;

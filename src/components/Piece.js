import React from 'react';
import { PIECES_HTML } from '../constants';
import '../../style/Piece.scss';

const Piece = ({ x, y, color, value }) => {
  // console.log('RENDER PIECE');
  return <div
    className="piece"
    dangerouslySetInnerHTML={{__html: PIECES_HTML[color][value]}}
    draggable="true"
    onDragStart={event => {
      event.dataTransfer.setData('text/plain', JSON.stringify({ x, y }));
    }}
  />
};

export default Piece;

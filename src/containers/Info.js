import React from 'react';
import { connect } from 'react-redux';

let Info = ({ activePlayer }) => {
  return (
    <h3 className="info">
      Player: {activePlayer}
    </h3>
  )
};

const mapStateToProps = ({ chess }) => {
  return {
    activePlayer: chess.activePlayer,
  }
};

Info = connect(mapStateToProps)(Info);

export default Info;

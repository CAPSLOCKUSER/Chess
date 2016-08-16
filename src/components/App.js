import React, { Component } from 'react';
import Board from '../containers/Board';
import '../../style/App.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Board />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Board from './Board';
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

import React, { Component } from 'react';
import Board from './Board';
import Info from '../containers/Info';
import '../../style/App.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Info />
        <Board />
      </div>
    );
  }
}

export default App;

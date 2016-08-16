import {combineReducers} from 'redux';
import chessBoard from './chessBoard';

const ChessApp = combineReducers({
  chessBoard,
});

export default ChessApp;

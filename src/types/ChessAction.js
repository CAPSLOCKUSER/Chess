// @flow
import type { Action } from './Action';
import type { Point } from '../types/ChessTypes';

export interface MovePieceAction extends Action {
  from: Point,
  to: Point,
}

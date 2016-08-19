// @flow

import type { Dimension as D, Cell } from './types/ChessTypes';

export const findByPos = (i: D, j: D) => ({ x, y }: Cell) => x === i && y === j;

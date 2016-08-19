// @flow

import type { Dimension as D, Cell } from './types/ChessTypes';

export const findByPos = (i: number, j: number) => ({ x, y }: Cell) => x === i && y === j;
